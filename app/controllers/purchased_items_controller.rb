class PurchasedItemsController < ApplicationController
    skip_before_action :authorize, only: [:index]
    
def index
    # byebug
    render json: PurchasedItem.all, status: :ok
end

def show
    render json: @current_user.purchased_items.map{|pi| pi.item}, status: :ok
end

end
