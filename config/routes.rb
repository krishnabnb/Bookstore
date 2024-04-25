Rails.application.routes.draw do
  root to: 'home#index'
  namespace :api do
    namespace :v1 do
      resources :salers
      resources :books
      resources :customers
      resources :payments
      resources :carts
      resources :contacts
    end
  end
end
