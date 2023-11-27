import React from 'react'
import { StyleSheet, Text, View, ImageProps, ImageBackground, TouchableOpacity } from 'react-native'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import GradientBGIcon from './GradientBGIcon';
import CustomIcon from './CustomIcon';

interface ImageBackgroundInfoProps {
    EnablebackHandler: boolean;
    imagelink_potrait: ImageProps;
    type: string;
    id: string;
    favorite: boolean;
    name: string;
    region: string;
    averageRating: number;
    ratingCount: string;
    available: string;
    BackHandler?: any;
}

const ImageBackgroundInfo: React.FC<ImageBackgroundInfoProps> = ({
    EnablebackHandler,
    imagelink_potrait,
    type,
    id,
    favorite,
    name,
    region,
    averageRating,
    ratingCount,
    available,
    BackHandler,
}) => {
    return (
        <View>
            <ImageBackground
                source={imagelink_potrait}
                style={styles.ItemBackGroundImage}
            >
                {EnablebackHandler ? (
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
                ) : <></>}
                <View style={styles.ImageInfoOuterContainer}>
                    <View style={styles.ImageInfoInnerContainer}>
                        <View style={styles.InfoContainerRow}>
                            <View>
                                <Text style={styles.ItemTitleText}>{name}</Text>
                            </View>
                        </View>
                        <View style={styles.ItemPropertiesContainer}>
                            <View style={styles.PropertyFirst}>
                                <CustomIcon
                                    name='location'
                                    color={COLORS.primaryOrangeHex}
                                    size={FONTSIZE.size_24* 0.85}
                                />
                                <Text style={styles.PropertyTextFirst}>
                                    {region}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.InfoContainerRow}>
                        <View style={styles.RatingContainer}>
                            <CustomIcon
                                name={'star'}
                                color={COLORS.primaryOrangeHex}
                                size={FONTSIZE.size_20 *0.9}
                            />
                            <Text style={styles.RatingText}>{averageRating}</Text>
                            <Text style={styles.RatingCountText}>{ratingCount}</Text>
                        </View>
                        <View style={styles.PropertySecond}>
                            <Text style={[styles.ItemSubTitleText, { color: available == "true" ? COLORS.primaryGreenHex : COLORS.secondaryRedHex }]}>{available == "true" ? "Avaialable" : "Busy"}</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};


const styles = StyleSheet.create({
    ItemBackGroundImage: {
        width: '100%',
        aspectRatio: 20 / 25,
        justifyContent: 'space-between',
    },
    ImageHeaderBarContainer: {
        padding: SPACING.space_20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    ImageHeaderBarContainerWithoutBack: {
        padding: SPACING.space_20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    ImageInfoOuterContainer: {
        paddingVertical: SPACING.space_24,
        paddingHorizontal: SPACING.space_30,
        backgroundColor: COLORS.primaryBlackRGBA,
        borderTopLeftRadius: BORDERRADIUS.radius_20 * 1.5,
        borderTopRightRadius: BORDERRADIUS.radius_20 * 1.5,
    },
    ImageInfoInnerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: SPACING.space_15,
        alignItems: 'center'
    },
    InfoContainerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ItemTitleText: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_24,
        color: COLORS.primaryWhiteHex,
    },
    ItemSubTitleText: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_14,
    },
    ItemPropertiesContainer: {
        flexDirection: 'column',
        gap: SPACING.space_12,
        alignItems: 'center',
    },
    PropertyFirst: {
        height: 55,
        width: 55,
        borderRadius: BORDERRADIUS.radius_20 * 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryBlackHex
    },
    PropertyTextFirst: {
        alignContent: 'center',
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_10,
        color: COLORS.primaryWhiteHex,
    },
    PropertySecond: {
        height: 32,
        width: 55,
        borderRadius: BORDERRADIUS.radius_20 * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryBlackHex,
    },
    RatingContainer: {
        flexDirection: 'row',
        gap: SPACING.space_10,
        alignItems: 'center',
    },
    RatingText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_16,
        color: COLORS.primaryWhiteHex
    },
    RatingCountText: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_12,
        color: COLORS.primaryWhiteHex
    }
});

export default ImageBackgroundInfo;