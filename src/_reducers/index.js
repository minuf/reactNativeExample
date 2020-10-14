import { combineReducers } from 'redux';

import { products } from './product.reducer';

const rootReducer = combineReducers({
    products
});

export default rootReducer;