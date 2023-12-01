import { create } from "zustand";
import { produce } from "immer";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NormalPlacesData from "../data/NormalPlacesData";
import RecommendationData from "../data/RecommendationData";

export const useStore = create(
  persist(
    (set, get) => ({
      NPlacesList: NormalPlacesData,
      BestRecList: RecommendationData,
      CartPrice: 0,
      FList: [],
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
      addFavoriteList: (type: string, id: string) =>
        set(
          produce((state) => {
            if (type == "Normal") {
              for (let i = 0; i < state.NPlacesList.length; i++) {
                if (state.NPlacesList[i].id == id) {
                  if (state.NPlacesList[i].favorite == false) {
                    state.NPlacesList[i].favorite = true;
                    state.FList.unshift(state.NPlacesList[i]);
                  }
                  break;
                }
              }
            } else if (type == "Recommend") {
              for (let i = 0; i < state.BestRecList.length; i++) {
                if (state.BestRecList[i].id == id) {
                  if (state.BestRecList[i].favorite == false) {
                    state.BestRecList[i].favorite = true;
                    state.FList.unshift(state.BestRecList[i]);
                  }
                  break;
                }
              }
            }
          })
        ),
      deleteFavoriteList: (type: string, id: string) =>
        set(
          produce((state) => {
            if (type == "Normal") {
              for (let i = 0; i < state.NPlacesList.length; i++) {
                if (state.NPlacesList[i].id == id) {
                  if (state.NPlacesList[i].favorite == true) {
                    state.NPlacesList[i].favorite = false;
                  }
                  break;
                }
              }
            } else if (type == "Recommend") {
              for (let i = 0; i < state.BestRecList.length; i++) {
                if (state.BestRecList[i].id == id) {
                  if (state.BestRecList[i].favorite == true) {
                    state.BestRecList[i].favorite = false;
                  }
                  break;
                }
              }
            }
            let spliceIndex = -1;
            for (let i = 0; i < state.FList.length; i++) {
              if (state.FList[i].id == id) {
                spliceIndex = i;
                break;
              }
            }
            state.FList.splice(spliceIndex, 1);
          })
        ),
    }),
    {
      name: "TravelApp",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
