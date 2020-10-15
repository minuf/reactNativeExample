import {cartConstants} from '../_constants';

let cartProducts = []
const initialState = cartProducts ? {cartProducts} : {};
export function cart(state = initialState, action) {
    switch (action.type) {
        case cartConstants.ADD:
            console.log("ADDDDEDDD" + action.product.title)
            cartProducts.push(action.product)
            console.log("ADDDDEDDD" + cartProducts.length)

            return {
                items: cartProducts
            };
        default: return state;
    }
}