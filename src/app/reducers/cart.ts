import {createAction, createReducer, on, props} from '@ngrx/store';
import {AppState} from "./index";
import {Product} from "../interfaces/product";

// in case the project will grow try to keep Actions, Selectors, Reducers in separate files.
export const addToCart = createAction('ADD_TO_CART', props<{ product: Product}>());
export const removeFromCart = createAction('REMOVE_FROM_CART', props<{id: string}>());

export const cartSelector = (state: AppState) => state.cart;

// try to avoid 'any' type. Each initial state usually has a default values and described by appropriate interface
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
