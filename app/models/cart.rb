class Cart < ApplicationRecord
    validates :user_id, :product_id presence: true

    belongs_to :user
        foreign_key: :user_id

    belongs_to :product
        foreign_key: :product_id
end
