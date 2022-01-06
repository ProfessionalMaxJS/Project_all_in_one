class SelectedItemsController < ApplicationController

    def index    
        # byebug
        render json: SelectedItem.all, include: :item, status: :ok
    end

    def show
    if session[:user_id]
        render json: SelectedItem.all.filter{|si| si[:user_id]==session[:user_id]}.map{|si| si.item}, status: :ok
    else
        render json: {error: "FORBIDDEN"}, status: :unauthorized
    end
    end

    def create
        # byebug
        new_selected_item = SelectedItem.create!({item_id: params[:item_id], user_id: session[:user_id], quantity_selected: 1})
        render json: new_selected_item, status: :created
    end


def destroy
    selected_items_array = SelectedItem.all.filter{|si| si[:user_id]==session[:user_id]}
        # byebug
    selected_items_array.map{|si| PurchasedItem.create(user_id: si[:user_id], item_id: si[:item_id], quantity_purchased: si[:quantity_selected])}
        #byebug
    selected_items_array.map{|si| si.destroy}
        # byebug
    render json: {}, status: :no_content
    end

    private

    def si_params
        params.permit(:item_id)
    end

end
