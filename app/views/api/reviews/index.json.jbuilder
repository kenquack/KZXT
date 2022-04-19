@reviews.each do |review|
    json.set! review.id do
        json.id review.id
        json.body review.body
        json.rating review.rating
        json.productId review.product_id
        json.userId review.user_id
        json.createdAt review.created_at
        json.name review.user.email
    end
end