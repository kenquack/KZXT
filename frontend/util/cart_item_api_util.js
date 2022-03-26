export const fetchCartItems = () => {
    return $.ajax({
        method: "GET",
        url: "/api/cart_items"
    })
};

export const fetchCartItem = (cartItemId) => {
    return $.ajax({
        method: "GET",
        url: `/api/cart_items/${cartItemId}`
    })
};
  
export const createCartItem = (userId, productId, quantity) => (
    $.ajax({
        method: "POST",
        url: "/api/cart_items",
        data: { cart_item: {
        user_id: userId,
        product_id: productId,
        quantity: quantity
        } }
    })
);
  
export const deleteCartItem = (cartItemId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/cart_items/${cartItemId}`
    })
);