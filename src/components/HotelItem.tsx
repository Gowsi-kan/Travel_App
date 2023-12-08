import React, { useState } from 'react'
import { Image, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';
import { useNavigation } from '@react-navigation/native';
import { useStore } from '../store/store';

interface HotelItemProps {
    name: string;
    room: any;
    imagelink_square: ImageProps;
    onTotalPriceChange: any;
}

const HotelItem: React.FC<HotelItemProps> = ({
    name,
    room,
    imagelink_square,
    onTotalPriceChange,
}) => {

    const [quantities, setQuantities] = useState<{ [size: string]: number }>({});

    const handleAddQuantity = (item: any) => {
        const updatedQuantities = { ...quantities };
        updatedQuantities[item.size] = (updatedQuantities[item.size] || 0) + 1;
        setQuantities(updatedQuantities);
    };

    const handleReduceQuantity = (item: any) => {
        setQuantities((prevQuantities) => {
            const currentQuantity = prevQuantities[item.size] || 0;
            if (currentQuantity > 0) {
                const updatedQuantities = { ...prevQuantities };
                updatedQuantities[item.size] = currentQuantity - 1;
                return updatedQuantities;
            }
            return prevQuantities; // Return unchanged state if currentQuantity is already 0
        });
    };

    const calculateTotalPrice = (item: any) => {
        const quantity = Number(quantities[item.size]) || 0;
        // Remove the "$" sign and convert the remaining string to a number
        const price = Number(item.price.replace('$', '')) || 0;
        return quantity * price;
    };

    const addQuantity = useStore((state: any) => state.addQuantity);
    const BookedList = useStore((state: any) => state.checkList);

    if (BookedList.length > 0) {
        for (let i = 0; i < BookedList.length; i++) {
            console.log(`Booked ${i}: ${BookedList[i].name}`);
        }
    } else {
        console.log("FavoriteList is empty.");
    }

    const calculateOverallTotalPrice = () => {
        let totalPrice = 0;

        // Check if all size quantities are zero
        const allQuantitiesZero = Object.values(quantities).every((quantity) => quantity === 0);

        if (allQuantitiesZero) {
            // If all quantities are zero, set total price to zero
            totalPrice = 0;
        } else {
            // Calculate total price based on selected quantities
            room.forEach((data: any) => {
                totalPrice += calculateTotalPrice(data);
            });
        }
       

        onTotalPriceChange(totalPrice);
        return totalPrice;
    };

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
                                <Text style={[styles.SizeText, { fontSize: FONTSIZE.size_12 }]}>{data.size}</Text>
                            </View>
                            <Text style={styles.SizeText}>{data.price}</Text>
                        </View>
                        <View style={styles.HotelItemSizeValueContainer}>
                            <TouchableOpacity style={styles.HotelItemIcon} onPress={() => handleReduceQuantity(data)}>
                                <CustomIcon name="minus" color={COLORS.primaryWhiteHex} size={FONTSIZE.size_10} />
                            </TouchableOpacity>
                            <View style={styles.BookItemQuantityContainer} >
                                <Text style={styles.BookItemQuantityText}>{quantities[data.size] || 0}</Text>
                            </View>
                            <TouchableOpacity style={styles.HotelItemIcon} onPress={() => (handleAddQuantity(data), addQuantity(name, data.size))}>
                                <CustomIcon name="add" color={COLORS.primaryWhiteHex} size={FONTSIZE.size_10} />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}

                <View style={styles.TotalContainer}>
                    <View style={styles.TotalPriceContainer} >
                        <Text style={styles.TotalPriceText}>Total : $</Text>
                        <Text style={styles.TotalPriceTextPrice}>{calculateOverallTotalPrice()}</Text>
                    </View>
                </View>
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
        width: 160,
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
    },
    TotalPriceContainer: {
        backgroundColor: COLORS.primaryBlackRGBA,
        width: 347,
        borderRadius: BORDERRADIUS.radius_10,
        borderWidth: 2,
        borderColor: COLORS.primaryGreyHex,
        alignItems: 'center',
        paddingVertical: SPACING.space_4,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    TotalPriceText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_16,
        color: COLORS.primaryWhiteHex
    },
    TotalContainer: {
        alignItems: 'center'
    },
    TotalPriceTextPrice: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_16,
        color: COLORS.primaryOrangeHex
    }
});

export default HotelItem;