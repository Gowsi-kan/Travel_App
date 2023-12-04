import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';

interface PaymentFooterProps {
  buttonPressHandler: any;
  buttonTitle: string;
  price: number;
  isPrice: boolean;
}

const PaymentFooter: React.FC<PaymentFooterProps> = ({
  buttonPressHandler,
  buttonTitle,
  price,
  isPrice,
}) => {
  return (
    <View style={styles.PriceFooter}>
      {
        isPrice ?
          (<View style={styles.PriceContainer}>
            <Text style={styles.PriceTitle}>Price</Text>
            <Text style={styles.PriceText}>
              <Text style={styles.Price}>$</Text>
              {price}
            </Text>
          </View>) : (<></>)}
      <TouchableOpacity
        style={styles.PayButton}
        onPress={() => buttonPressHandler()}>
        <Text style={styles.ButtonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  PriceFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.space_20,
    padding: SPACING.space_20
  },
  PayButton: {
    backgroundColor: COLORS.primaryOrangeHex,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_36 * 1.8,
    borderRadius: BORDERRADIUS.radius_20,
  },
  ButtonText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  PriceContainer: {
    alignItems: 'center',
    width: 100,
  },
  PriceTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryLightGreyHex,
  },
  PriceText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_24,
    color: COLORS.primaryOrangeHex,
  },
  Price: {
    color: COLORS.primaryWhiteHex
  }
});

export default PaymentFooter;