class Api::ProductsController < ApplicationController

    def index
        @products = Product.all
        render 'api/products/index'
    end

    def product_params
        params.require(:product).permit(:name, :description, :category, :price)
    end
end
