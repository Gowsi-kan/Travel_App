import React from 'react'
import { Image, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';

interface HotelItemProps {
    name: string;
    room: any;
    imagelink_square: ImageProps;
}

const HotelItem: React.FC<HotelItemProps> = ({
    name,
    room,
    imagelink_square,
}) => {
    return (
        <View>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                style={styles.HotelItemLinearGradient}
            >
                <View style={styles.HotelItemRow}>
                    <Image source={imagelink_square} style={styles.HotelItemImage} />
                    <View style={styles.HotelItemInfo}>
                        <View>
                            <Text style={styles.HotelItemTitle}>{name}</Text>
                        </View>
                    </View>
                </View>
                {room.map((data: any, index: any) => (
                    <View key={index.toString()} style={styles.HotelItemSizeRowContainer}>
                        <View style={styles.HotelItemSizeValueContainer}>
                            <View style={styles.SizeBox}>
                                <Text style={[styles.SizeText,{fontSize: FONTSIZE.size_12}]}>{data.size}</Text>
                            </View>
                            <Text style={styles.SizeText}>{data.price}</Text>
                        </View>
                        <View style={styles.HotelItemSizeValueContainer}>
                            <TouchableOpacity style={styles.HotelItemIcon}>
                                <CustomIcon name="minus" color={COLORS.primaryWhiteHex} size={FONTSIZE.size_10} />
                            </TouchableOpacity>
                            <View style={styles.BookItemQuantityContainer}>
                                <Text style={styles.BookItemQuantityText}>{data.quantity}</Text>
                            </View>
                            <TouchableOpacity style={styles.HotelItemIcon}>
                                <CustomIcon name="add" color={COLORS.primaryWhiteHex} size={FONTSIZE.size_10} />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </LinearGradient>
        </View>
    )
}



const styles = StyleSheet.create({
    HotelItemLinearGradient: {
        flex: 1,
        gap: SPACING.space_12,
        padding: SPACING.space_12,
        borderRadius: BORDERRADIUS.radius_25
    },
    HotelItemRow: {
        flexDirection: 'row',
        gap: SPACING.space_12,
        flex: 1,
    },
    HotelItemImage: {
        height: 120,
        width: 120,
        borderRadius: BORDERRADIUS.radius_20
    },
    HotelItemInfo: {
        flex: 1,
        paddingVertical: SPACING.space_4,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    HotelItemTitle: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryWhiteHex
    },
    HotelItemSubTitle: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_12,
        color: COLORS.secondaryLightGreyHex
    },
    HotelItemSizeRowContainer: {
        flex: 1,
        alignItems: 'center',
        gap: SPACING.space_20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    HotelItemSizeValueContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    SizeBox: {
        backgroundColor: COLORS.primaryBlackHex,
        height: 40,
        width: 100,
        borderRadius: BORDERRADIUS.radius_10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    SizeText: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_16,
        color: COLORS.secondaryLightGreyHex
    },
    HotelItemIcon: {
        backgroundColor: COLORS.primaryOrangeHex,
        padding: SPACING.space_12,
        borderRadius: BORDERRADIUS.radius_10
    },
    BookItemQuantityContainer: {
        backgroundColor: COLORS.primaryBlackHex,
        width: 80,
        borderRadius: BORDERRADIUS.radius_10,
        borderWidth: 2,
        borderColor: COLORS.primaryOrangeHex,
        alignItems: 'center',
        paddingVertical: SPACING.space_4
    },
    BookItemQuantityText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_16,
        color: COLORS.primaryWhiteHex
    }
});

export default HotelItem;