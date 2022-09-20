import {createAction, createReducer, on, props} from '@ngrx/store';

import {AppState} from "./index";
import {Product} from "@interfaces/product";

export const addToWishList = createAction('ADD_TO_WISHLIST', props<{ product: Product }>());
export const removeFromWishList = createAction('REMOVE_FROM_WISHLIST', props<{id: string}>());

export const wishlistSelector = (state: AppState) => state.wishlist;

const initialState = [] as any;

export const wishlistReducer = createReducer(
  initialState,
  on(addToWishList, (state: [], {product}): Product[] => {
    return [...state, product];
  }),
  on(removeFromWishList, (state: Product[], { id }): Product[] => {
    return state.filter(product => product.id !== id);
  }),
);
