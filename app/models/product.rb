class Product < ApplicationRecord
    validates :name, :description, :category, :price, presence: true

    has_one_attached :photo

    has_many :cart_items,
        foreign_key: :product_id,
        class_name: :CartItem

    has_many :review,
        foreign_key: :product_id,
        class_name: :Review
end
