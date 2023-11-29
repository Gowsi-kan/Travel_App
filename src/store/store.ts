import { create } from "zustand";
import { produce } from "immer";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BeansData from "../data/BeansData";
// import DestinationData from "../data/DestinationData";
import CoffeeData from "../data/CoffeeData";
import PlacesData from "../data/PlacesData";
import NormalPlacesData from "../data/NormalPlacesData";
import RecommendedData from "../data/RecommendedData";
import RecoList from "../data/RecommendationData";
import DestData from "../data/DestData";

export const useStore = create(
  persist(
    (set, get) => ({
      PlacesList: PlacesData,
      DList: DestData,
      NorList: NormalPlacesData,
      BeanList: BeansData,
      RList: RecommendedData,
      RecoList: RecoList,
      CartPrice: 0,
      FavoritesList: [],
      CartList: [],
      BookingHistoryList: [],
      addToCart: (cartItem: any) =>
        set(
          produce((state) => {
            let found = false;
            for (let i = 0; i < state.CartList.length; i++) {
              if (state.CartList[i].id == cartItem.id) {
                found = true;
                let size = false;
                // for (let j = 0;j<state.CartList[i])
              }
            }
          })
        ),
      addToFavoriteList: (type: string, id: string) =>
        set(
          produce((state) => {
            if (type == "Normal") {
              for (let i = 0; i < state.NorList.length; i++) {
                if (state.NorList[i].id == id) {
                  if (state.NorList[i].favorite == false) {
                    state.NorList[i].favorite = true;
                    state.FavoritesList.unshift(state.NorList[i]);
                  }
                  break;
                }
              }
            } else if (type == "Recommend") {
              for (let i = 0; i < state.RList.length; i++) {
                if (state.RList[i].id == id) {
                  if (state.RList[i].favorite == false) {
                    state.RList[i].favorite = true;
                    state.FavoritesList.unshift(state.RList[i]);
                  }
                  break;
                }
              }
            }
          })
        ),
      deleteFromFavoriteList: (type: string, id: string) =>
        set(
          produce((state) => {
            if (type == "Normal") {
              for (let i = 0; i < state.NorList.length; i++) {
                if (state.NorList[i].id == id) {
                  if (state.NorList[i].favorite == true) {
                    state.NorList[i].favorite = false;
                  }
                  break;
                }
              }
            } else if (type == "Recommend") {
              for (let i = 0; i < state.RList.length; i++) {
                if (state.RList[i].id == id) {
                  if (state.RList[i].favorite == true) {
                    state.RList[i].favorite = false;
                  }
                  break;
                }
              }
            }
            let spliceIndex = -1;
            for (let i = 0; i < state.FavoritesList.length; i++) {
              if (state.FavoritesList[i].id == id) {
                spliceIndex = i;
                break;
              }
            }
            state.FavoritesList.splice(spliceIndex, 1);
          })
        ),
    }),
    {
      name: "TravelApp",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
