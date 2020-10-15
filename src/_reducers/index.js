import { combineReducers } from 'redux';

import { products } from './product.reducer';
import { cart } from './cart.reducer';

const rootReducer = combineReducers({
    products,
    cart,
});

export default rootReducer;