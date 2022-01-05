class SelectedItemsController < ApplicationController

    def index
        render json: SelectedItem.all, status: :ok
    end

    def create
        # byebug
        new_selected_item = SelectedItem.create!({item_id: params[:item_id], user_id: session[:user_id], quantity_selected: 1})
        render json: new_selected_item, status: :created
    end

    private

    def si_params
        params.permit(:item_id)
    end

end
