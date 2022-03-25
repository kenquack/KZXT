json.extract! user, :id, :email

if user.items.length != 0
    json.cart user.item_ids

    count = 0
    user.carts.each do |cart|
        count += cart.quantity
    end
    json.cartCount count
else
    json.cart([])
    json.cartCount 0
end