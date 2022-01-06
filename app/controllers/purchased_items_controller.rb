class PurchasedItemsController < ApplicationController

def index
    # byebug
    render json: PurchasedItem.all, status: :ok
end

def show
    if session[:user_id]
        render json: PurchasedItem.all.filter{|pi| pi[:user_id]==session[:user_id]}.map{|pi| pi.item}, status: :ok
    else
        render json: {error: "FORBIDDEN"}, status: :unauthorized
    end
    end

end
