import React, { useState } from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ImageBackgroundInfo from '../components/ImageBackgroundInfo';
import { useStore } from '../store/store';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import PaymentFooter from '../components/PaymentFooter';


const DetailsScreens = ({ navigation, route }: any) => {
  console.log('Route = ', route.params);

  const ItemofIndex = useStore((state: any) =>
    route.params.type == "Normal" ? state.PlacesDataList : state.BestRecList,
  )[route.params.index];

  const BackHandler = () => {
    navigation.pop();
  };

  const addFavoriteList = useStore((state: any) => state.addFavoriteList);
  const deleteFavoriteList = useStore(
    (state: any) => state.deleteFavoriteList,
  )

  const ToggleFavorite = (favorite: boolean, type: string, id: string) => {
    favorite ? deleteFavoriteList(type, id) : addFavoriteList(type, id);
  };

  const [fullDesc, setFullDesc] = useState(false);

  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const [price, setPrice] = useState(ItemofIndex.accommodations[0].room[0].price)
  
  const addToCartHandler = ({
    type,
    id,
    favorite,
    name,
    region,
    averageRating,
    ratingCount,
    available,
    accommodations
  }: any) => {
    addToCart({
      type,
      id,
      favorite,
      name,
      region,
      averageRating,
      ratingCount,
      available,
      accommodations: [{...price,quantity: 1}],
    });
    calculateCartPrice();
   };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <ImageBackgroundInfo
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
          ToggleFavorite={ToggleFavorite}
        />
        <View style={styles.FooterInfoArea}>
          <Text style={styles.InfoTitle}>Description</Text>
          {fullDesc ? (
            <TouchableOpacity onPress={() => {setFullDesc(prev => !prev)}}>
              <Text style={styles.DescriptionText}>{ItemofIndex.description}</Text>
            </TouchableOpacity>
          ) : (
              <TouchableOpacity onPress={() => { setFullDesc(prev => !prev) }}>
                <Text numberOfLines={3} style={styles.DescriptionText}>{ItemofIndex.description}</Text>
              </TouchableOpacity>
          )}
        </View>
        <PaymentFooter
          price={0}
          isPrice={false}   
          buttonTitle="Book Hotel"
          buttonPressHandler={() => {
            navigation.push('Book', {
              index: ItemofIndex.index,
              id: ItemofIndex.id,
              type: ItemofIndex.type
            });
            addToCartHandler({
              type: ItemofIndex.type,
              id: ItemofIndex.id,
              favorite: ItemofIndex.favorite,
              name: ItemofIndex.name,
              region: ItemofIndex.region,
              averageRating: ItemofIndex.averageRating,
              ratingCount: ItemofIndex.ratingsCount,
              available: ItemofIndex.available,
              accommodations: ItemofIndex.accommodations,
            });
          } }      />
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
    fontSize: FONTSIZE.size_16*0.96,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_10
  }
});

export default DetailsScreens;