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

export const editCartItem = (cartItem, quantity) => {
    let id = cartItem.id
    return $.ajax({
        method: "PATCH",
        url: `/api/cart_items/${cartItem.id}`,
        data: { 
            id, 
            quantity
        }
    })
}
  
export const createCartItem = (user_id, product_id, quantity) => (
    $.ajax({
        method: "POST",
        url: "/api/cart_items",
        data: { cart_item: {
        user_id: user_id,
        product_id: product_id,
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