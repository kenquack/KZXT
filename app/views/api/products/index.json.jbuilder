@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :name, :category, :description, :price
        json.photoUrl url_for(product.photo) if product.photo.attached?
    end
end