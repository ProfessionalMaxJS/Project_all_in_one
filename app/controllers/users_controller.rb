class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :check]

def create
    # byebug
    new_user = User.create!(user_params)
    session[:user_id] = new_user.id
    # byebug
    render json: new_user, status: :created 
end

def check
    if session[:user_id]
        render json: true
    else
        render json: false
    end
end

def show
    render json: @current_user, status: :ok
  end

private

def user_params
    params.permit(:name, :email, :password, :password_confirmation)
end

end
