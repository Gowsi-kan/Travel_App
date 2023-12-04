import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

const Login = () => {

    const [title, setTitle] = useState<string>("Login");
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

    return (
        <View>
            <View style={styles.Container}>
                <Text style={styles.TitleText}>{title === "Login" ? "Login" : "Register"}</Text>
            </View>
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
                    onPress={() => setTitle("Register")}>
                    <Text style={styles.ButtonTextRegister}>Register Here, if not Registered</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: SPACING.space_20,
        padding: SPACING.space_20
    },
    TitleText: {
        fontFamily: FONTFAMILY.poppins_medium,
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_14,
    },
    InputContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    EmailTextInput: {
        width: 350,
        color: COLORS.primaryOrangeHex,
        backgroundColor: COLORS.primaryGreyHex,
        borderRadius: BORDERRADIUS.radius_15,
        padding: SPACING.space_15,
        marginVertical: SPACING.space_10,
    },
    PasswordTextInput: {
        width: 350,
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
        width: 350,
    },
    RegisterButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: BORDERRADIUS.radius_15,
        padding: SPACING.space_15 * 0.6,
        marginVertical: SPACING.space_2*2,
        width: 350,
    },
    ButtonTextRegister: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_10*1.3,
        color: COLORS.primaryWhiteHex,
    }
})

export default Login