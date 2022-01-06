class SelectedItemsController < ApplicationController
    skip_before_action :authorize, only: [:index]
    def index    
        # byebug
        render json: SelectedItem.all, include: :item, status: :ok
    end

    def show
    if session[:user_id]
        render json: @current_user.selected_items.map{|si| si.item}, status: :ok
    else
        render json: {error: "FORBIDDEN"}, status: :unauthorized
    end
    end

    def create
        # byebug
        new_selected_item = SelectedItem.create!({item_id: params[:item_id], quantity_selected: 1, user_id: session[:user_id]}) #quantity_selected: params[:quantity_selected]
        render json: new_selected_item, status: :created
    end


def destroy
    # byebug
    @current_user.selected_items.map{|si| @current_user.purchased_items.create(item_id: si[:item_id], quantity_purchased: si[:quantity_selected])}
        # byebug
    if @current_user.selected_items.length>0
        points = @current_user.point_tracker
        points +=1
        @current_user.update(point_tracker: points)
    end
    @current_user.selected_items.map{|si| si.destroy}
        # byebug
    render json: {"Thanks for your purchase. Points on your account": @current_user[:point_tracker]}, status: :ok
end

    private

    def si_params
        params.permit(:item_id, :quantity_selected)
    end

end
