import { create } from "zustand";
import { produce } from "immer";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NormalPlacesData from "../data/NormalPlacesData";
import RecommendationData from "../data/RecommendationData";

export const useStore = create(
  persist(
    (set, get) => ({
      PlacesDataList: NormalPlacesData,
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
                for (let j = 0; j < state.CartList[i].accommodations[0].length; j++) {
                
                  if (state.CartList[i].accommodations.room[j].size == cartItem.accommodations.room[0].size) {
                    size = true;
                    state.CartList[i].accommodations.room[j].quantity++;
                    break;
                  }
                  if (size == false) {
                    state.CartList[i].accommodations.room[j].push(cartItem.accommodations.room[0])
                  }
                  state.CartList[i].accommodations.room[j].price((a: any, b: any) => {
                    if (a.size > b.size) {
                      return -1;
                    }
                    if (a.size < b.size) {
                      return 1;
                    }
                    return 0;
                  })
                }
                break;
              }
            }
            if (found == false) {
              state.CartList.push(cartItem);
            }
          })
        ),
      calculateCartPrice: () =>
        set(
          produce(state => {
            let totalPrice = 0;
            for (let i = 0; i < state.CartList.length; i++) {
              let tempprice = 0;
              for (let j = 0; j < state.CartList[i].accommodations[0].length; j++) {
                
                  tempprice = tempprice + parseFloat(state.CartList[i].accommodations.room[j].price) * state.CartList[i].accommodations.room[j].quantity;
                
              }
              state.CartList[i].ItemPrice = tempprice.toFixed(2).toString();
              totalPrice = totalPrice + tempprice;
            }
            state.CartPrice = totalPrice.toFixed(2).toString();
          })),
      

      addFavoriteList: (type: string, id: string) =>
        set(
          produce((state) => {
            if (type == "Normal") {
              for (let i = 0; i < state.PlacesDataList.length; i++) {
                if (state.PlacesDataList[i].id == id) {
                  if (state.PlacesDataList[i].favorite == false) {
                    state.PlacesDataList[i].favorite = true;
                    state.FList.unshift(state.PlacesDataList[i]);
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
              for (let i = 0; i < state.PlacesDataList.length; i++) {
                if (state.PlacesDataList[i].id == id) {
                  if (state.PlacesDataList[i].favorite == true) {
                    state.PlacesDataList[i].favorite = false;
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
