Rails.application.routes.draw do
  root to: 'home#index'

  namespace :api do
    namespace :v1 do
      resources :salers
      resources :books do
        collection do
          get :search
        end
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
