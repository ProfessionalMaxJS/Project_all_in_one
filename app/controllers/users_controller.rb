class UsersController < ApplicationController
    # skip_before_action :authorize, only: :create

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
    user = User.find(session[:user_id])
    render json: user, status: :ok
  end

private

def user_params
    params.permit(:name, :email, :password, :password_confirmation)
end

end
