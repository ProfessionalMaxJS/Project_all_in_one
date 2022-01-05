class ItemsController < ApplicationController
    # skip_before_action :authorize, only: :index
def index
    render json: Item.all
end


end
