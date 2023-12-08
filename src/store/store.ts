import { create } from "zustand";
import { produce } from "immer";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NormalPlacesData from "../data/NormalPlacesData";
import RecommendationData from "../data/RecommendationData";

export const useStore = create(
  persist(
    (set, get) => ({
      PlacesListData: NormalPlacesData,
      BestRecommentList: RecommendationData,
      CartPrice: 0,
      FList: [],
      CartList: [],
      BookingHistoryList: [],
      checkList: [],
      addFavoriteList: (type: string, id: string) =>
        set(
          produce((state) => {
            if (type == "Normal") {
              for (let i = 0; i < state.PlacesListData.length; i++) {
                if (state.PlacesListData[i].id == id) {
                  if (state.PlacesListData[i].favorite == false) {
                    state.PlacesListData[i].favorite = true;
                    state.FList.unshift(state.PlacesListData[i]);
                  }
                  break;
                }
              }
            } else if (type == "Recommend") {
              for (let i = 0; i < state.BestRecommentList.length; i++) {
                if (state.BestRecommentList[i].id == id) {
                  if (state.BestRecommentList[i].favorite == false) {
                    state.BestRecommentList[i].favorite = true;
                    state.FList.unshift(state.BestRecommentList[i]);
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
              for (let i = 0; i < state.PlacesListData.length; i++) {
                if (state.PlacesListData[i].id == id) {
                  if (state.PlacesListData[i].favorite == true) {
                    state.PlacesListData[i].favorite = false;
                  }
                  break;
                }
              }
            } else if (type == "Recommend") {
              for (let i = 0; i < state.BestRecommentList.length; i++) {
                if (state.BestRecommentList[i].id == id) {
                  if (state.BestRecommentList[i].favorite == true) {
                    state.BestRecommentList[i].favorite = false;
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
      addQuantity: (hotelName: string, roomSize: string) =>
        set(
          produce((state) => {
            for (let i = 0; i < state.PlacesListData.length; i++) {
              if (state.PlacesListData[i].accommodations.name === hotelName) {
                for (let j = 0; j < state.PlacesListData[i].accommodations.room.length; j++) {
                  if (state.PlacesListData[i].accommodations.room[j].size == roomSize) {
                    state.PlacesListData[i].accommodations.room[j].quantity = state.PlacesListData[i].accommodations.room[j].quantity + 1 ;
                  }
                  break;
                }
              }
            }
          })
        ),
      addToBookedList: () =>
        set(
          produce((state) => {
            for (let i = 0; i < state.PlacesListData.length; i++) {
              for (let j = 0; j < state.PlacesListData[i].accommodations.room.length; j++) {
                if (state.PlacesListData[i].accommodations.room[j].quantity > 0) {
                  state.checkList.unshift(state.PlacesListData[i].accommodations);
                }
                break;
              }
            }
          })
        ),
    }),

    {
      name: "TravelApp",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
