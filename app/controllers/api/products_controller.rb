class Api::ProductsController < ApplicationController

    def index
        # @products = Product.all
        # render 'api/products/index'
        if (params[:filter][:category] != "")
            @products = Product.where(category: params[:filter][:category])
        else
            @products = Product.all
        end
        render 'api/products/index'
    end

    def show
        @product = Product.find_by(id: params[:id])
        render 'api/products/show'
    end

    def product_params
        params.require(:product).permit(:name, :description, :category, :price)
    end
end
