import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "@/models";

interface IInitialCategoriesState {
  activeCatagory: ICategory | null;
}

const initialState: IInitialCategoriesState = {
  activeCatagory: null
}

type TCategoriesActionChangePayload = PayloadAction<ICategory | null>;

export const categoriesReducer = createSlice({
  name: "categories",
  initialState,
  reducers: {
    categoriesChangeActive(state, action: TCategoriesActionChangePayload) {
      // If no category has selected before
      if (!state.activeCatagory) {
        state.activeCatagory = action.payload
        return;
      }
      // If new selected category is the same as previous active category
      if (action.payload && state.activeCatagory.id === action.payload.id) {
        state.activeCatagory = null;
        return;
      }
      // If new category is selected
      state.activeCatagory = action.payload
    },
  },
})