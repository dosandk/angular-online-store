import {createAction, createReducer, on, props} from '@ngrx/store';
import {AppState} from "./index";
import {Product} from "../interfaces/product";

export const addToCart = createAction('ADD_TO_CART', props<{ product: Product}>());
export const removeFromCart = createAction('REMOVE_FROM_CART', props<{id: string}>());

export const cartSelector = (state: AppState) => state.cart;

const initialState = [] as any;

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state: [], {product}) => {
    return [...state, product];
  }),
  on(removeFromCart, (state: Product[], { id }) => {
    return state.filter(product => product.id !== id);
  }),
);
