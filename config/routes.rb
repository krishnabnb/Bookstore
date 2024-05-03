Rails.application.routes.draw do
  root to: 'home#index'
  get '*path', to: 'home#index'

  namespace :api do
    namespace :v1 do
      resources :salers
      resources :books do
        member do
          patch :update_status
        end
      end
      resources :customers
      resources :payments
      resources :carts
      resources :contacts
    end
  end
end
