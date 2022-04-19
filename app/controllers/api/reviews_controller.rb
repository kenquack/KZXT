class Api::ReviewsController < ApplicationController
    def index
        @reviews = Reviews.all
        render :index
    end

    def show
        @review = Review.find_by(id: params[:id])
        render :show
    end

    def create 
        @review = Review.new(review_params)

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update 
        @review = Review.find_by(id: params[:id])

        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, stauts
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        @review.destroy
        render :show
    end

    def review_params
        params.require(:review).permit(:body, :rating, :user_id, :product_id)
    end
end
