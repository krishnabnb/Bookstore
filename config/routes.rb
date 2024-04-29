Rails.application.routes.draw do
 
  # devise_for :customers, controllers: {
  #   registrations: 'customers/registrations',
  #   sessions: 'customers/sessions'
  # }
  devise_for :customers, controllers: {
    sessions: 'customers/sessions'
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
