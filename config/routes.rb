Rails.application.routes.draw do

# namespace :api do
  
  resources :selected_items, only: [:create, :index] do
    resources :items, only: [:index]
  end
  
  
  resources :items, only: [:index]
  # get "/items", to: "items#index"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
# end

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
