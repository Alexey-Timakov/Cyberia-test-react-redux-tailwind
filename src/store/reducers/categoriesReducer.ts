export enum CategoriesActionsTypes {
  CATEGORIES_FETCH = "CATEGORIES_FETCH",
  CATEGORIES_ERROR = "CATEGORIES_ERROR",
  CATEGORIES_GOT = "CATEGORIES_GOT",
  CATEGORIES_CHANGE = "CATEGORIES_CHANGE",
}

export interface ICategory {
  id: number;
  name: string;
}

interface IInitialCategoriesState {
  categories: ICategory[];
  isLoading: boolean;
  error: string | null;
  activeCatagory: ICategory | null;
}

export const initialState: IInitialCategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
  activeCatagory: null
}

interface ICategoriesActionFetch {
  type: CategoriesActionsTypes.CATEGORIES_FETCH;
}

interface ICategoriesActionError {
  type: CategoriesActionsTypes.CATEGORIES_ERROR;
  payload: string;
}

interface ICategoriesActionGot {
  type: CategoriesActionsTypes.CATEGORIES_GOT;
  payload: ICategory[]
}

interface ICategoriesActionChange {
  type: CategoriesActionsTypes.CATEGORIES_CHANGE;
  payload: ICategory | null
}

export type TCategoriesActions = ICategoriesActionFetch | ICategoriesActionError | ICategoriesActionGot | ICategoriesActionChange;

export const categoriesReducer = (state = initialState, action: TCategoriesActions): IInitialCategoriesState => {
  switch (action.type) {
    case CategoriesActionsTypes.CATEGORIES_FETCH:
      return { ...state, isLoading: true }

    case CategoriesActionsTypes.CATEGORIES_ERROR:
      return { ...state, isLoading: false, error: action.payload }

    case CategoriesActionsTypes.CATEGORIES_GOT:
      return { isLoading: false, error: null, categories: action.payload, activeCatagory: null }

    case CategoriesActionsTypes.CATEGORIES_CHANGE:
      // If no category has selected before
      if (!state.activeCatagory) {
        return { ...state, activeCatagory: action.payload }
      }

      // If new selected category is the same as previous active category
      if (action.payload && state.activeCatagory.id === action.payload.id) {
        return { ...state, activeCatagory: null }
      }

      // If new category is selected
      return { ...state, activeCatagory: action.payload }

    default:
      return state
  }
};