@cart_items.each do |cart_item|
    json.set! cart_item.id do
        json.id cart_item.id
        json.userId  cart_item.user_id
        json.productId cart_item.product_id
        json.quantity cart_item.quantity
    end
end