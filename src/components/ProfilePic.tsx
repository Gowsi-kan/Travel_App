import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, SPACING } from '../theme/theme';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

type ProfilePicProps = {
    isProfile?: boolean;
    imageSource: any;
    navigation: any;
}


const ProfilePic = (props: ProfilePicProps) => {

    const [initializing, setInitializing] = useState<boolean>(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
    const [photoURL, setPhotoURL] = useState("https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg");

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


    return (
        <View style={styles.ImageContainer}>
            {props.isProfile ?
                (
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('User');
                        }}
                    >
                        <Image
                            source={{ uri: photoURL }}
                            style={styles.Image}
                        />
                    </TouchableOpacity>
                ) : <></>}
        </View>
    )
}

const styles = StyleSheet.create({
    ImageContainer: {
        height: SPACING.space_36,
        width: SPACING.space_36,
        borderRadius: SPACING.space_12,
        borderWidth: 2,
        borderColor: COLORS.primaryBlackHex,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    Image: {
        height: SPACING.space_36,
        width: SPACING.space_36,
    }
});

export default ProfilePic;
