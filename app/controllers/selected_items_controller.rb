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

    def remove
        @current_user.selected_items.find_by(item_id: params[:item_id]).destroy
        render json:@current_user.selected_items, status: :ok
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
        if (points == 10)
            @current_user.update(point_tracker: 0)
            @current_user.selected_items.map{|si| si.destroy}
            # byebug
            render json: {"thanks for your ten purchases! if you can read this, you get a free coffee next time! Points": @current_user[:point_tracker]}, status: :ok
        else
            @current_user.update(point_tracker: points)
            @current_user.selected_items.map{|si| si.destroy}
            render json: {"Thanks for your purchase. Points on your account": @current_user[:point_tracker]}, status: :ok
        end
    else
        render json: {error: "empty cart"}, status: :ok
    end        
end

    private

    def si_params
        params.permit(:item_id, :quantity_selected)
    end

end
