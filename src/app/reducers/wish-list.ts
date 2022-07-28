import {createAction, createReducer, on, props} from '@ngrx/store';
import {AppState} from "./index";
import {Product} from "../interfaces/product";

// in case the project will grow try to keep Actions, Selectors, Reducers in separate files.
// Rename the parent 'reducer' folder to 'store'
export const addToWishList = createAction('ADD_TO_WISHLIST', props<{ product: Product }>());
export const removeFromWishList = createAction('REMOVE_FROM_WISHLIST', props<{id: string}>());

export const wishlistSelector = (state: AppState) => state.wishlist;

// try to avoid 'any' type. Each initial state usually has a default values and described by appropriate interface
const initialState = [] as any;

export const wishlistReducer = createReducer(
  initialState,
  on(addToWishList, (state: [], {product}) => {
    return [...state, product];
  }),
  on(removeFromWishList, (state: Product[], { id }) => {
    return state.filter(product => product.id !== id);
  }),
);
