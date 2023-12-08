import React, { useEffect, useState } from 'react'
import { ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useStore } from '../store/store';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import PaymentFooter from '../components/PaymentFooter';
import HeaderBar from '../components/HeaderBar';
import HotelItem from '../components/HotelItem';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import GradientBGIcon from '../components/GradientBGIcon';

const BookScreen = ({ navigation, route }: any) => {

    const ItemofIndex = useStore((state: any) =>
        route.params.type == 'Normal' ? state.PlacesListData : state.BestRecommentList,
    )[route.params.index];

    const [totalPrice, setTotalPrice] = useState(0);

    let tempPrice = 0;

    const handleTotalPriceChange = (newTotalPrice: number) => {
        tempPrice = tempPrice + newTotalPrice;
        setTotalPrice(tempPrice);
    };

    const BackHandler = () => {
        navigation.pop();
    };

    const buttonPressHandler = () => {
        navigation.push("Payment", { amount: totalPrice })
    }

    const [initializing, setInitializing] = useState<boolean>(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

    useEffect(() => {
        auth().onAuthStateChanged(activeUser => {
            setUser(activeUser);
            if (initializing) {
                setInitializing(false);
            }
        })
    }, [initializing]);

    if (initializing) {
        return null;
    }

    if (!user) {
        return (
            <View style={styles.ScreenContainer}>
                <StatusBar backgroundColor={COLORS.primaryBlackHex} />
                <View style={styles.ImageHeaderBarContainer}>
                    <TouchableOpacity onPress={() => {
                        BackHandler();
                    }}>
                        <GradientBGIcon
                            name='left'
                            color={COLORS.primaryLightGreyHex}
                            size={FONTSIZE.size_16} />
                    </TouchableOpacity>
                </View>
                <View style={styles.ImageContainer}>
                    <ImageBackground
                        source={require('../assets/extra/login.png')}
                        style={styles.ItemBackGroundImage}
                    />
                </View>
                <View style={styles.FormContainer}>
                    <Text style={styles.AccountTellText}>Need to have account to Pay</Text>
                    <View style={styles.InputContainer}>
                        <TouchableOpacity
                            style={styles.MainButton}
                            onPress={() => {
                                navigation.navigate('User');
                            }}>
                            <Text style={styles.ButtonText}>Create Account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.MainButton}
                            onPress={() => {
                                navigation.navigate('User');
                            }}>
                            <Text style={styles.ButtonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.ScreenContainer}>
            <StatusBar backgroundColor={COLORS.primaryBlackHex} />
            <HeaderBar title="Hotel Booking" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.ScrollViewFlex}>
                <View style={styles.ScrollViewInnerView}>
                    <View style={styles.ItemContainer}>
                        <View style={styles.ListItemContainer}>
                            <Text>{ItemofIndex.name}</Text>
                            {
                                ItemofIndex.accommodations.map((accommodation: any) => (
                                    <TouchableOpacity key={accommodation.id}  onPress={() => { }} >
                                        <HotelItem
                                            name={accommodation.name}
                                            room={accommodation.room}
                                            imagelink_square={accommodation.imagelink_square}
                                            onTotalPriceChange={handleTotalPriceChange}
                                            />
                                    </TouchableOpacity>
                                ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
            {ItemofIndex && ItemofIndex.accommodations.length !== 0 ? (
                <PaymentFooter
                    buttonPressHandler={buttonPressHandler}
                    buttonTitle={'Pay'}
                    price={totalPrice}
                    isPrice={true}
                />
            ) : (
                <></>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
    },
    ScrollViewFlex: {
        flexGrow: 1,
    },
    FooterInfoArea: {
        padding: SPACING.space_20
    },
    InfoTitle: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_16,
        color: COLORS.primaryWhiteHex,
        marginBottom: SPACING.space_10
    },
    DescriptionText: {
        letterSpacing: 0.5,
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_16 * 0.96,
        color: COLORS.primaryWhiteHex,
        marginBottom: SPACING.space_10
    },
    ScrollViewInnerView: {
        flex: 1,
        justifyContent: 'space-between',
    },
    ItemContainer: {
        flex: 1,
    },
    ListItemContainer: {
        gap: SPACING.space_16,
        paddingHorizontal: SPACING.space_30 * 0.72,
    },
    FormContainer: {
        flex: 1,
        alignItems: 'center',
        marginVertical: SPACING.space_30 * 2
    },
    InputContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ButtonText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryWhiteHex,
    },
    AccountTellText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_14,
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
    ImageHeaderBarContainer: {
        padding: SPACING.space_20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    ItemBackGroundImage: {
        width: '80%',
        aspectRatio: 30 / 24,
    },
    ImageContainer: {
        alignItems: 'center',
        marginTop: SPACING.space_30 * 2,
        justifyContent: 'center',
        marginHorizontal: SPACING.space_12 * 5,
        paddingLeft: SPACING.space_10 * 4.2,
    }
});

export default BookScreen;
