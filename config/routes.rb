Rails.application.routes.draw do
 
  devise_for :customers, controllers: {
    registrations: 'registrations',
    sessions: 'sessions'
  }

  root to: 'home#index'
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
