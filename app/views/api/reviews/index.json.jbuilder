@reviews.each do |review|
    json.set! review.id do
        json.id review.id
        json.body review.body
        json.rating review.rating
        json.productId review.product_id
        json.userId review.user_id
        json.name review.user.email
        json.date Time.at(review.created_at.to_i).strftime("%B %e, %Y")
    end
end