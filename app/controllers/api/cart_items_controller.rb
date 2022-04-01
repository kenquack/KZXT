class Api::CartItemsController < ApplicationController

    def index
        # @cart_items = current_user.cart_items

        if current_user
            @cart_items = current_user.cart_items
        else 
            @cart_items = CartItem.all
        end
        render :index
    end

    def show
        @cart_item = CartItem.find_by(id: params[:id])
        render :show
    end

    def update
        @cart_item = CartItem.find_by(id: params[:id])

        if !@cart_item
            render json: ['No item to update']
            return
        end
        
        if @cart_item.update!(:quantity => params[:quantity])
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end
      
    def create
        @cart_item = CartItem.new(cart_item_params)
        if @cart_item.save!
            render :show
        else
            render json: ['Please sign in to add to cart.'], status: 422
        end
    end
    
    def destroy
        puts params
        @cart_item = CartItem.find_by(id: params[:id])
        @cart_item.destroy
        render :show
    end
    
    
    def cart_item_params
        params.require(:cart_item).permit(:user_id, :product_id, :quantity)
    end
end
