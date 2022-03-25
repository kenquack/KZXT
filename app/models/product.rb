class Product < ApplicationRecord
    validates :name, :description, :category, :price, presence: true

    has_one_attached :photo

    has_many :carts,
        foreign_key: :product_id
end
