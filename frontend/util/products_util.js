export const getAllProducts = (filter) => {
    return $.ajax({
        method: 'GET',
        url: 'api/products',
        data:{filter: filter}
    })
}

export const getProduct = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/products/${id}`,
    })
}