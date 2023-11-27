import React, { useState } from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HotelBackgroundInfo from '../components/HotelBackgroundInfo';
import { useStore } from '../store/store';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import PaymentFooter from '../components/PaymentFooter';

const BookScreen = ({ navigation, route }: any) => {
    console.log('Route Book = ', route.params);

    const ItemofIndex = useStore((state: any) =>
        route.params.type == 'Normal' ? state.DList : state.RList,
    )[route.params.index];

    const BackHandler = () => {
        navigation.pop();
    };
    
    return (
        <View style={styles.ScreenContainer}>
            <StatusBar backgroundColor={COLORS.primaryBlackHex} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.ScrollViewFlex}>
                <HotelBackgroundInfo
                    EnablebackHandler={true}
                    imagelink_potrait={ItemofIndex.imagelink_portrait}
                    type={ItemofIndex.type}
                    id={ItemofIndex.id}
                    favorite={ItemofIndex.favorite}
                    name={ItemofIndex.name}
                    region={ItemofIndex.region}
                    averageRating={ItemofIndex.averageRating}
                    ratingCount={ItemofIndex.ratingsCount}
                    available={ItemofIndex.available}
                    BackHandler={BackHandler}
                />
                <View style={styles.FooterInfoArea}>
                    <Text style={styles.InfoTitle}>Description</Text>
                </View>
                <PaymentFooter
                    buttonTitle="Book Hotel"
                    buttonPressHandler={() => { }}
                />
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
    }
});

export default BookScreen;
