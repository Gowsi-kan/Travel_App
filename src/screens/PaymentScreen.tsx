import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import GradientBGIcon from '../components/GradientBGIcon';
import PaymentMethod from '../components/PaymentMethod';
import PaymentFooter from '../components/PaymentFooter';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from '../components/CustomIcon';
import PopUpAnimation from '../components/PopUpAnimation';

const PaymentList = [
    {
        name: 'Wallet',
        icon: 'icon',
        isIcon: true,
    },
    {
        name: 'Google Pay',
        icon: require("../assets/app_images/gpay.png"),
        isIcon: false,
    },
    {
        name: 'Apple Pay',
        icon: require("../assets/app_images/applepay.png"),
        isIcon: false,
    },
    {
        name: 'Amazon Pay',
        icon: require("../assets/app_images/amazonpay.png"),
        isIcon: false,
    }
]

const PaymentScreen = ({ navigation, route }: any) => {

    const [paymentMode, setPaymentMode] = useState("Credit Card");

    const [showAnimation, setShowAnimation] = useState(false);

    const buttonPressHandler = () => {
        setShowAnimation(true);
        setTimeout(() => {
            setShowAnimation(false);
            navigation.navigate("Home");
        }, 2000);
    };
    
    const totalPrice = route.params?.amount || 0;

    return (
        <View style={styles.ScreenContainer}>
            <StatusBar backgroundColor={COLORS.primaryBlackHex} />

            {showAnimation ? <PopUpAnimation style={styles.LottieAnimation} source={require('../lottie/successful.json')} /> : <></>}

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.ScrollViewFlex}>
                <View style={styles.HeaderContainer}>
                    <TouchableOpacity onPress={() => {
                        navigation.pop()
                    }}>
                        <GradientBGIcon name="left" color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16} />
                    </TouchableOpacity>
                    <Text style={styles.HeaderText}>Payments</Text>
                    <View style={styles.EmptyView} />
                </View>
                <View style={styles.PaymentOptionContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            setPaymentMode("Credit Card");
                        }}
                    >
                        <View style={[styles.CrediCardContainer, {
                            borderColor: paymentMode == "Credit Card" ?
                                COLORS.primaryOrangeHex :
                                COLORS.primaryGreyHex
                        }]}>
                            <Text style={styles.CreditCardTitle}>Credit Card</Text>
                            <View style={styles.CreditCardBG}>
                                <LinearGradient
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                                    style={styles.LinearGradientStyle}>
                                    <View style={styles.CreditCardRow}>
                                        <CustomIcon
                                            name='chip'
                                            size={FONTSIZE.size_20 * 2}
                                            color={COLORS.primaryOrangeHex}
                                        />
                                        <CustomIcon
                                            name='visa'
                                            size={FONTSIZE.size_30 * 2}
                                            color={COLORS.primaryWhiteHex}
                                        />
                                    </View>
                                    <View style={styles.CreditCardNumberContainer}>
                                        <Text style={styles.CreditCardNumber}>3847</Text>
                                        <Text style={styles.CreditCardNumber}>3847</Text>
                                        <Text style={styles.CreditCardNumber}>3847</Text>
                                        <Text style={styles.CreditCardNumber}>3847</Text>
                                    </View>
                                    <View style={styles.CreditCardRow}>
                                        <View style={styles.CreditCardNameContainer}>
                                            <Text style={styles.CreditCardNameSubtitle}>Card Holder Name</Text>
                                            <Text style={styles.CreditCardNameTitle}>Gowsikan N</Text>
                                        </View>
                                        <View style={styles.CreditCardDateContainer}>
                                            <Text style={styles.CreditCardNameSubtitle}>Expiry Data</Text>
                                            <Text style={styles.CreditCardNameTitle}>10/26</Text>
                                        </View>
                                    </View>
                                </LinearGradient>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {PaymentList.map((data: any) => (
                        <TouchableOpacity
                            key={data.name}
                            onPress={() => {
                                setPaymentMode(data.name)
                            }}
                        >
                            <PaymentMethod
                                paymentMode={paymentMode}
                                name={data.name}
                                icon={data.icon}
                                isIcon={data.isIcon}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            <PaymentFooter
                buttonPressHandler={buttonPressHandler}
                buttonTitle={`Pay with ${paymentMode}`}
                price={totalPrice}
                isPrice={true}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex
    },
    ScrollViewFlex: {
        flex: 1,
    },
    HeaderContainer: {
        paddingHorizontal: SPACING.space_24,
        paddingVertical: SPACING.space_15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    EmptyView: {
        height: SPACING.space_36,
        width: SPACING.space_36
    },
    HeaderText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_20,
        color: COLORS.primaryWhiteHex
    },
    PaymentOptionContainer: {
        padding: SPACING.space_15,
        gap: SPACING.space_15
    },
    CrediCardContainer: {
        padding: SPACING.space_10,
        gap: SPACING.space_10,
        borderRadius: BORDERRADIUS.radius_15,
        borderWidth: 3
    },
    CreditCardTitle: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_14,
        color: COLORS.primaryWhiteHex,
        marginLeft: SPACING.space_10
    },
    CreditCardBG: {
        backgroundColor: COLORS.primaryGreyHex,
        borderRadius: BORDERRADIUS.radius_25,
    },
    LinearGradientStyle: {
        gap: SPACING.space_36,
        borderRadius: BORDERRADIUS.radius_25,
        paddingHorizontal: SPACING.space_15,
        paddingVertical: SPACING.space_10,
    },
    CreditCardRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    CreditCardNumber: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryWhiteHex,
        letterSpacing: SPACING.space_4 *1.15
    },
    CreditCardNumberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.space_10,
    },
    CreditCardNameContainer: {
        alignItems: 'flex-start'
    },
    CreditCardDateContainer: {
        alignItems: 'flex-end'
    },
    CreditCardNameSubtitle: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_12,
        color: COLORS.primaryLightGreyHex,
    },
    CreditCardNameTitle: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryWhiteHex,
    },
    LottieAnimation: {
        flex: 1,
    }
})

export default PaymentScreen;