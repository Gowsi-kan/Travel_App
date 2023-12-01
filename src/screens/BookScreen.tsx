import React, { useState } from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HotelBackgroundInfo from '../components/HotelBackgroundInfo';
import { useStore } from '../store/store';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import PaymentFooter from '../components/PaymentFooter';
import HeaderBar from '../components/HeaderBar';
import HotelItem from '../components/HotelItem';

const BookScreen = ({ navigation, route }: any) => {
    console.log('Route Book = ', route.params);

    const ItemofIndex = useStore((state: any) =>
        route.params.type == 'Normal' ? state.NPlacesList : state.BestRecList,
    )[route.params.index];

    const BackHandler = () => {
        navigation.pop();
    };

    const HotelList = useStore((state: any) => {
        state.HotelList;
    })
    const HotelPrice = useStore((state: any) => {
        state.HotelPrice;
    })
    const calculateTotalPrice = useStore((state: any) => {
        state.calculateTotalPrice;
    })

    const buttonPressHandler = () => {
        navigation.push("Payment", { amount: HotelPrice })
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
                                    <TouchableOpacity onPress={() => { }} key={accommodation.id}>
                                        <HotelItem
                                            name={accommodation.name}
                                            room={accommodation.room}
                                            imagelink_square={accommodation.imagelink_square}
                                        />
                                    </TouchableOpacity>
                                ))}
                        </View>
                    </View>

                    {ItemofIndex && ItemofIndex.accommodations.length !== 0 ? (
                        <PaymentFooter buttonPressHandler={buttonPressHandler} buttonTitle={'Pay'} />
                    ) : (
                        <></>
                    )}
                </View>
            </ScrollView>
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
        paddingHorizontal: SPACING.space_30*0.72,
    }
});

export default BookScreen;
