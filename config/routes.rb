Rails.application.routes.draw do

# namespace :api do
  
  resources :purchased_items, only: [:index]
  resources :selected_items, only: [:create, :index, :show]   
  resources :items, only: [:index]
  # get "/items", to: "items#index"

  patch "/remove", to: "selected_items#remove"
  get "/orderhistory", to: "purchased_items#show"
  get "/shoppingcart", to: "selected_items#show"
  delete "/purchase", to: "selected_items#destroy"
  get "/me", to: "users#show"
  get "/verify", to: "users#check"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
# end

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
