import {cartConstants} from '../_constants';

export const cartActions = {
    addProduct
}

function addProduct(product) {
    return dispatch => {
        dispatch({type: cartConstants.ADD, product})
    }
}
