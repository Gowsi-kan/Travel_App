import React from 'react'
import { ImageProps, StyleSheet, Text, View } from 'react-native'
import ImageBackgroundInfo from './ImageBackgroundInfo';
import LinearGradient from 'react-native-linear-gradient';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';

interface FavoriteItemProps {
    imagelink_square: ImageProps;
    type: string;
    id: string;
    favorite: boolean;
    name: string;
    region: string;
    averageRating: number;
    ratingCount: string;
    available: string;
    ToggleFavorite: any;
    description: string;
}

const FavoriteItemCard: React.FC<FavoriteItemProps> = ({
    imagelink_square,
    type,
    id,
    favorite,
    name,
    region,
    averageRating,
    ratingCount,
    available,
    ToggleFavorite,
    description
}) => {
  return (
    <View style={styles.CardContainer}>
          <ImageBackgroundInfo
              EnablebackHandler={false}
              imagelink_potrait={imagelink_square}
              type={type}
              id={id}
              favorite={favorite}
              name={name}
              region={region}
              averageRating={averageRating}
              ratingCount={ratingCount}
              available={available}
              ToggleFavorite={ToggleFavorite}
          />
          <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={[
                  COLORS.primaryGreyHex,
                  COLORS.primaryBlackHex
              ]}
              style={styles.ContainerLinearGradient}>
              <Text style={styles.DescriptionTitle}>Description</Text>
              <Text style={styles.DescriptionText}>{description}</Text>
          </LinearGradient>
    </View>
  )
}
 
const styles = StyleSheet.create({
    CardContainer: {
        borderRadius: BORDERRADIUS.radius_25,
        overflow: 'hidden',
    },
    ContainerLinearGradient: {
        gap: SPACING.space_10,
        padding: SPACING.space_20
    },
    DescriptionTitle: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_16,
        color: COLORS.secondaryLightGreyHex
    },
    DescriptionText: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_14,
        color: COLORS.primaryWhiteHex
    }
});

export default FavoriteItemCard