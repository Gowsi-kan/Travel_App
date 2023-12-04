import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import auth from '@react-native-firebase/auth';

type propsType = {
    email: string|null;
}

const Welcome = (props: propsType) => {

    const LogOutUser = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }

    return (
        <View style={styles.Container}>
            <Text style={styles.TitleText}>Welcome: {props.email}</Text>
            <TouchableOpacity
                style={styles.PayButton}
                onPress={LogOutUser}>
                <Text style={styles.ButtonText}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    Container: {
        flexDirection: 'column',
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
    ButtonText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryWhiteHex,
    },
    PayButton: {
        backgroundColor: COLORS.primaryOrangeHex,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: BORDERRADIUS.radius_15,
        padding: SPACING.space_15 * 0.6,
        marginVertical: SPACING.space_10,
        width: 350,
    },
});

export default Welcome;