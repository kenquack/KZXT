import { getAllProducts, getProduct } from '../util/products_util';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

const receiveAllProducts = (products) => {
    return {
        type: RECEIVE_ALL_PRODUCTS,
        products
    }
};

const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product
});

export const fetchAllProducts = (filter) => dispatch => getAllProducts(filter)
    .then((products) => dispatch(receiveAllProducts(products)))

export const fetchProduct = (id) => dispatch => getProduct(id)
    .then((product) => dispatch(receiveProduct(product)))