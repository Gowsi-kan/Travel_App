import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useStore } from '../store/store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import HeaderBar from '../components/HeaderBar'
import FavoriteItemCard from '../components/FavoriteItemCard'
import EmptyListAnimation from '../components/EmptyListAnimation'

const FavouriteScreen = ({ navigation,route }: any) => {
    const FavoriteList = useStore((state: any) => state.FList)

    const tabBarHeight = useBottomTabBarHeight();

    const addFavoriteList = useStore((state: any) => state.addFavoriteList);
    const deleteFavoriteList = useStore(
        (state: any) => state.deleteFavoriteList,
    );

    const ToggleFavorite = (favorite: boolean, type: string, id: string) => {
        favorite ? deleteFavoriteList(type, id) : addFavoriteList(type, id);
    };

    if (FavoriteList.length > 0) {
        for (let i = 0; i < FavoriteList.length; i++) {
            console.log(`Favorites ${i}: ${FavoriteList[i].name}`);
        }
    } else {
        console.log("FavoriteList is empty.");
    }

    return (
        <View style={styles.ScreenContainer}>
            <StatusBar backgroundColor={COLORS.primaryBlackHex} />
            <HeaderBar title="Favorites" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.ScrollViewFlex}>
                <View style={[styles.ScrollViewInnerView, { marginBottom: tabBarHeight }]}>
                    <View style={styles.ItemContainer}>
                        {FavoriteList.length == 0 ? (
                            <EmptyListAnimation title="Favorites is Empty"/>
                        ) : (
                            <View style={styles.ListItemContainer}>
                                {
                                    FavoriteList.map((data: any) => (
                                        <TouchableOpacity
                                            key={data.id}
                                            onPress={() => {
                                                navigation.push('Details', {
                                                    index: data.index,
                                                    id: data.id,
                                                    type: data.type,
                                                });
                                            }}
                                        >
                                            <FavoriteItemCard
                                                imagelink_square={data.imagelink_square}
                                                type={data.type}
                                                id={data.id}
                                                favorite={data.favorite}
                                                name={data.name}
                                                region={data.region}
                                                averageRating={data.averageRating}
                                                ratingCount={data.ratingsCount}
                                                available={data.available}
                                                ToggleFavorite={ToggleFavorite}
                                                description={data.description}
                                            />
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                        )}
                    </View>
                </View>
            </ScrollView>
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
    }
})

export default FavouriteScreen;