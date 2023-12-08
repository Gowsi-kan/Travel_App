import { Dimensions, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-toast-message';

const CARD_WIDTH = Dimensions.get('window').width * 0.95;

interface LoginProps {
    heading: string;
}

const Login: React.FC<LoginProps> = ({heading}) => {

    const [title, setTitle] = useState<string>(heading);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const userRegister = () => {
        if (title === "Register") {
            if (email.length > 0 && password.length > 0) {
                auth()
                    .createUserWithEmailAndPassword(
                        email,
                        password
                    )
                    .then(() => {
                        ToastAndroid.show("User account created.!", ToastAndroid.LONG);
                    })
                    .catch(error => {
                        ToastAndroid.show(error.message, ToastAndroid.LONG);
                    });
            } else {
                ToastAndroid.show("Enter Email/Password", ToastAndroid.LONG);
            }
        } else {
            if (email.length > 0 && password.length > 0) {
                auth()
                    .signInWithEmailAndPassword(
                        email,
                        password
                    )
                    .then(() => {
                        ToastAndroid.show("User signed in!", ToastAndroid.LONG);
                    })
                    .catch(error => {
                        ToastAndroid.show(error.message, ToastAndroid.LONG);
                    });
            } else {
                ToastAndroid.show("Enter Email/Password", ToastAndroid.LONG);
            }
        }
    }

    const handlePress = () => {
        setTitle(title === "Register" ? "Login" : "Register");
    };

    return (
        <View style={styles.FormContainer}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.CardLinearGradientContainer}
                colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.EmailTextInput}
                        placeholder='Email ID'
                        placeholderTextColor={COLORS.secondaryLightGreyHex}
                        value={email}
                        onChangeText={(mail) => setEmail(mail)}
                    />
                    <TextInput
                        style={styles.PasswordTextInput}
                        placeholder='Password'
                        placeholderTextColor={COLORS.secondaryLightGreyHex}
                        secureTextEntry={true}
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={password}
                        onChangeText={(pw) => setPassword(pw)}
                    />
                    <TouchableOpacity
                        style={styles.MainButton}
                        onPress={userRegister}>
                        <Text style={styles.ButtonText}>{title === "Login" ? "Login" : "Register"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.RegisterButton}
                        onPress={handlePress}>
                        <Text style={styles.ButtonTextRegister}>{title === "Register" ? "No account, Create One" : "Already have account, Login Here"}</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>

    )
}

const styles = StyleSheet.create({
    FormContainer: {
        flex: 1,
        alignItems: 'center',
        marginVertical: SPACING.space_30,
    },
    CardLinearGradientContainer: {
        width: CARD_WIDTH*0.92,
        height: CARD_WIDTH * 0.75,
        padding: SPACING.space_15,
        borderRadius: BORDERRADIUS.radius_25,
    },
    CardFooterRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: SPACING.space_12,
    },
    CardAvailable: {
        fontFamily: FONTFAMILY.poppins_bold,
        color: COLORS.primaryOrangeHex,
        fontSize: FONTSIZE.size_12,
    },
    InputContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    EmailTextInput: {
        width: 320,
        color: COLORS.primaryOrangeHex,
        backgroundColor: COLORS.primaryGreyHex,
        borderRadius: BORDERRADIUS.radius_15,
        padding: SPACING.space_15,
        marginVertical: SPACING.space_10,
    },
    PasswordTextInput: {
        width: 320,
        color: COLORS.primaryOrangeHex,
        backgroundColor: COLORS.primaryGreyHex,
        borderRadius: BORDERRADIUS.radius_15,
        padding: SPACING.space_15,
        marginVertical: SPACING.space_10,
    },
    ButtonText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryWhiteHex,
    },
    MainButton: {
        backgroundColor: COLORS.primaryOrangeHex,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: BORDERRADIUS.radius_15,
        padding: SPACING.space_15 * 0.6,
        marginVertical: SPACING.space_10,
        width: 320,
    },
    RegisterButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: BORDERRADIUS.radius_15,
        padding: SPACING.space_15 * 0.6,
        marginVertical: SPACING.space_2 * 2,
        width: 320,
    },
    ButtonTextRegister: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_10 * 1.3,
        color: COLORS.primaryWhiteHex,
    }
});

export default Login;