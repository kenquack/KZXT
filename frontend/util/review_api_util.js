export const fetchReview = (reviewId) => {
  return $.ajax({
        method: "GET",
        url: `/api/reviews/${reviewId}`
  })
};

export const fetchReviews = (productId) => {
  return $.ajax({
        method: "GET",
        url: `/api/reviews/`,
        data: {id: productId}
  })
};

export const createReview = (review) => {
  return $.ajax({
        method: "POST",
        url: "/api/reviews",
        data: { review }
  })
}

export const updateReview = (review) => {
  return $.ajax({
        method: "PATCH",
        url: `/api/reviews/${review.id}`,
        data: { review }
  })
}

export const deleteReview = (reviewId) => {
  return $.ajax({
        method: "DELETE",
        url: `/api/reviews/${reviewId}`
    })
}
