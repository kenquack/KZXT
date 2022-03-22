export const getAllProducts = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/products',
    })
}

export const getProduct = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/products/${id}`,
    })
}