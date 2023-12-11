import { Dimensions, Image, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import Login from '../components/Login';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

const CARD_WIDTH = Dimensions.get('window').width * 0.85;

const AuthFirebase = () => {

  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [image, setImage] = useState("https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg");
  const [photoURL, setPhotoURL] = useState("https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg");

  const LogOutUser = () => {

    setPhotoURL("https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg");

    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }

  const uploadImage = () => {
    console.log("Choose Photo");
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      setImage(image.path);
      ToastAndroid.show("Photo Selected Successfully", ToastAndroid.LONG);

      // Call photoUpload function here
      photoUpload(image.path);
    });
  }

  const photoUpload = async (pathToFile: string) => {
    // Assuming you are using Firebase Authentication
    const user = auth().currentUser;

    if (user) {
      const uid = user.uid;
      const newFilename = `${uid}`;

      try {
        const reference = storage().ref(newFilename);

        // Upload the file to Firebase Storage
        await reference.putFile(pathToFile);
        const url = await storage().ref(newFilename).getDownloadURL();
        console.log(url);

        ToastAndroid.show("Photo Uploaded Successfully", ToastAndroid.LONG);
      } catch (e) {
        console.log(e);
        // Handle error as needed
      }
    } else {
      // Handle the case where the user is not authenticated
      console.log("User not authenticated");
    }
  }

  useEffect(() => {
    auth().onAuthStateChanged(activeUser => {
      setUser(activeUser);
      if (initializing) {
        setInitializing(false);
      }

      const fetchImage = async () => {
        if (activeUser) {
          const uid = activeUser.uid;

          try {
            const url = storage().ref(uid).getDownloadURL();

            setPhotoURL(await url);
          } catch (e) {
            
          }
        }
      }

      fetchImage()
        .catch(console.error);
    })
    

  }, [initializing]);

  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      <Login heading='Login' />
    );
  }


  return (
    <View style={styles.FormContainer}>
      <View style={styles.ImageContainer}>
        <View style={styles.ImageContainer2}>
          <Image
            source={{ uri: photoURL }}
            style={styles.Image2}
            alt='Loading'
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.UploadContainer}
            onPress={uploadImage}
          >
            <MaterialCommunityIcons name="upload" size={25} color={
              COLORS.primaryOrangeHex} />
            <Text style={styles.UploadText}>Upload</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.SpaceBetween}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.CardLinearGradientContainer}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
          <View style={styles.ViewContainer}>
            <View style={styles.EmailContainer}>
              <Text style={styles.EmailIDText}>Email ID :</Text>
              <Text style={styles.EmailText}>{user.email}</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
      {/* <View style={styles.SpaceBetween}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.CardLinearGradientContainer}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
          <View style={styles.ViewContainer}>
            <View style={styles.EmailContainer}>
              <Text style={styles.EmailIDText}>Email ID :</Text>
              <Text style={styles.EmailText}>{user.email}</Text>
            </View>
          </View>
        </LinearGradient>
      </View> */}
      <View style={styles.ButtonContainer}>
        <TouchableOpacity
          style={styles.LogOutButton}
          onPress={LogOutUser}>
          <Text style={styles.ButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  FormContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: SPACING.space_30,
  },
  CardLinearGradientContainer: {
    width: CARD_WIDTH,
    height: CARD_WIDTH * 0.15,
    padding: SPACING.space_15,
    borderRadius: BORDERRADIUS.radius_15,
  },
  EmailText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_10 * 1.3,
    color: COLORS.primaryWhiteHex,
  },
  EmailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewContainer: {
    paddingTop: SPACING.space_2,
    paddingBottom: SPACING.space_2,
    paddingLeft: SPACING.space_8,
    paddingRight: SPACING.space_8,
  },
  SpaceBetween: {
    marginBottom: SPACING.space_10,
  },
  ButtonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: SPACING.space_10 * 5,
  },
  LogOutButton: {
    backgroundColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDERRADIUS.radius_15,
    padding: SPACING.space_15 * 0.6,
    marginVertical: SPACING.space_10,
    width: 350,
  },
  ButtonText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  EmailIDText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_10 * 1.3,
    color: COLORS.primaryOrangeHex,
  },
  ImageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: SPACING.space_30,
    justifyContent: 'space-between',
    marginHorizontal: CARD_WIDTH * 0.5,
    marginBottom: SPACING.space_30,
  },
  ItemBackGroundImage: {
    width: CARD_WIDTH * 0.4,
    height: CARD_WIDTH * 0.4,
    borderRadius: BORDERRADIUS.radius_25,
  },
  UploadContainer: {
    marginTop: SPACING.space_10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.space_4
  },
  UploadText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_10 * 1.3,
    color: COLORS.primaryOrangeHex,
  },
  ImageContainer2: {
    height: CARD_WIDTH * 0.4,
    width: CARD_WIDTH * 0.4,
    borderRadius: SPACING.space_15,
    borderWidth: 2,
    borderColor: COLORS.primaryBlackHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  Image2: {
    height: CARD_WIDTH * 0.4,
    width: CARD_WIDTH * 0.4,
  }
});

export default AuthFirebase;