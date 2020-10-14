import {productConstants} from '../_constants';
import {productService} from '../_services';

export const productActions = {
    getAll
}

function getAll() {
    console.log("GET ALL");
    
    return dispatch => {
        dispatch(request());

        productService.getAll()
            .then(
                products => {
                    // console.log(products[0]);
                    dispatch(success(products));
                },
                error => {
                    console.log(error);
                    dispatch(failure(error.toString()));
                }
                
            );
    };

    function request() { return { type: productConstants.GETALL_REQUEST } }
    function success(products) { return { type: productConstants.GETALL_SUCCESS, products } }
    function failure(error) { return { type: productConstants.GETALL_FAILURE, error } }
}