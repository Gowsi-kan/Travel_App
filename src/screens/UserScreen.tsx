import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../theme/theme'
import HeaderBar from '../components/HeaderBar'
import AuthFirebase from '../config/AuthFirebase'

const UserScreen = () => {

    const [userToken, setUserToken] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    return (
        <View style={styles.ScreenContainer}>
            <StatusBar backgroundColor={COLORS.primaryBlackHex} />
            <HeaderBar title="Profile" isProfile={false} />
            {/* <ActivityIndicator size="large" /> */}
            <AuthFirebase/>
        </View>
    )
}

const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
    },
    ScrollViewFlex: {
        flexGrow: 1,
    },
})

export default UserScreen;