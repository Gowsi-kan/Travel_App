import React, { useRef, useState } from 'react'
import { Dimensions, FlatList, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useStore } from '../store/store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import CustomIcon from '../components/CustomIcon';
import PlacesCard from '../components/PlacesCard';
import Ionicons from 'react-native-vector-icons/Ionicons';

const getCategoriesFromData = (data: any) => {
  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].category] == undefined) {
      temp[data[i].category] = 1;
    } else {
      temp[data[i].category]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};

const getTypeFromData = (data: any) => {
  let t: any = {};
  for (let i = 0; i < data.length; i++) {
    t[data[i].type]++;
  }
  let types = Object.keys(t);
  return types;
}

const getPlaceList = (category: string, data: any) => {
  if (category == 'All') {
    return data;
  } else {
    let destinationlist = data.filter((item: any) => item.category == category);
    return destinationlist;
  }
}

const HomeScreen = ({ navigation }: any) => {
  const DestList = useStore((state: any) => state.PlacesListData);
  const RecommenddList = useStore((state: any) => state.BestRecommentList);
  const [categories, setCategories] = useState(getCategoriesFromData(DestList));
  const [type, setType] = useState(getTypeFromData(DestList));
  const [searchText, setSearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedPlace, setSortedPlace] = useState(getPlaceList(categoryIndex.category, DestList));

  const ListRef: any = useRef<FlatList>();
  const tabBarHeight = useBottomTabBarHeight();

  const searchPlace = (search: string) => {
    if (search != '') {
      ListRef?.current?.scrollToOffset({
        animated: true,
        offset: 0,
      });
      setCategoryIndex({ index: 0, category: categories[0] });
      setSortedPlace([
        ...DestList.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase()))]);
    }
  };

  const resetSearchPlace = () => {
    ListRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
    setCategoryIndex({ index: 0, category: categories[0] });
    setSortedPlace([...DestList]);
    setSearchText('');
  }

  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        {/* App Header */}
        <HeaderBar isProfile={true} />

        <Text style={styles.ScreenTitle}>Find the best{'\n'}places for you</Text>

        {/* Search Place */}
        <View style={styles.InputContainerComponent}>
          <TouchableOpacity
            onPress={() => {
              searchPlace(searchText)
            }}>
            <Ionicons
              style={styles.InputIcon}
              name="search"
              size={FONTSIZE.size_18}
              color={searchText.length > 0 ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
          </TouchableOpacity>
          <TextInput
            placeholder='Find you destination....'
            value={searchText}
            onChangeText={text => {
              setSearchText(text);
              searchPlace(text);
            }}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}
          />
          {searchText.length > 0 ? (
            <TouchableOpacity onPress={() => resetSearchPlace()}>
              <CustomIcon
                style={styles.InputIcon}
                name="close"
                size={FONTSIZE.size_14}
                color={COLORS.primaryLightGreyHex} />
            </TouchableOpacity>)
            : (<></>
            )}
        </View>

        {/* Category Scroller */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CatergoryScrollViewStyle}
        >{categories.map((data, index) => (
          <View key={index.toString()} style={styles.CategoryScrollViewContainer}>
            <TouchableOpacity
              style={styles.CategoryScrollViewItem}
              onPress={() => {
                ListRef?.current?.scrollToOffset({
                  animated: true,
                  offset: 0,
                });
                setCategoryIndex({ index: index, category: categories[index] });
                setSortedPlace([...getPlaceList(categories[index], DestList),]);
              }}>
              <Text
                style={[
                  styles.CategoryText,
                  categoryIndex.index == index
                    ? { color: COLORS.primaryOrangeHex }
                    : {},
                ]}>
                {data}
              </Text>
              {categoryIndex.index == index ? (
                <View style={styles.ActiveCategory} />
              ) : (<></>
              )}
            </TouchableOpacity>
          </View>
        )
        )}</ScrollView>

        {/* Places FlatList */}
        <FlatList
          ref={ListRef}
          horizontal
          ListEmptyComponent={
            <View style={styles.EmptyContainer}>
              <Text style={styles.CategoryText}>No Places Found</Text>
            </View>
          }
          showsHorizontalScrollIndicator={false}
          data={sortedPlace}
          contentContainerStyle={styles.FlatListContainer}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return <TouchableOpacity
              onPress={() => {
                navigation.push('Details', {
                  index: item.index,
                  id: item.id,
                  type: item.type,
                });
              }}>
              <PlacesCard
                id={item.id}
                index={item.index}
                category={item.category}
                available="Closed"
                imagelink_square={item.imagelink_square}
                name={item.name}
                region={item.region}
                averageRating={item.averageRating}
                buttonPressHandler={() => { }}
              />
            </TouchableOpacity>;
          }}
        />

        <Text style={styles.RecommendedTitle}>Recommended</Text>
        {/* Recommended Flat List */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={RecommenddList}
          contentContainerStyle={[styles.FlatListContainer, { marginBottom: tabBarHeight }]}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return <TouchableOpacity
              onPress={() => {
                navigation.push("Details", {
                  index: item.index,
                  id: item.id,
                  type: item.type
                });
              }}>
              <PlacesCard
                id={item.id}
                index={item.index}
                category={item.category}
                available="Available"
                imagelink_square={item.imagelink_square}
                name={item.name}
                region={item.region}
                averageRating={item.averageRating}
                buttonPressHandler={() => { }}
              />
            </TouchableOpacity>;
          }}
        />
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
  ScreenTitle: {
    fontSize: FONTSIZE.size_24,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
  },
  InputContainerComponent: {
    flexDirection: 'row',
    margin: SPACING.space_30,
    marginBottom: SPACING.space_12,
    marginTop: SPACING.space_18,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
  },
  InputIcon: {
    marginHorizontal: SPACING.space_20,
  },
  TextInputContainer: {
    flex: 1,
    height: SPACING.space_20 * 2.3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex
  },
  CatergoryScrollViewStyle: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_18,

  },
  CategoryScrollViewContainer: {
    paddingHorizontal: SPACING.space_15,
  },
  CategoryText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },
  ActiveCategory: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
  },
  CategoryScrollViewItem: {
    alignItems: 'center',
  },
  FlatListContainer: {
    gap: SPACING.space_20,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_30,
  },
  EmptyContainer: {
    width: Dimensions.get('window').width - SPACING.space_30 * 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.space_36 * 3.2,
  },
  RecommendedTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.secondaryLightGreyHex,
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_15,
  }
})

export default HomeScreen;

