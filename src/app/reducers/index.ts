import {cartReducer} from './cart';
import {wishlistReducer} from './wish-list';

// NOTE: Global state
export interface AppState {
  cart: [],
  wishlist: []
}

export {
  cartReducer,
  wishlistReducer
}
