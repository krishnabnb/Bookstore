Rails.application.routes.draw do
  get 'current_customer/index'
  root to: 'home#index'

  get 'current_customer', to: 'current_customer#show'

  devise_for :customers, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions:'customers/sessions',
    registrations: 'customers/registrations'
  }

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

  get '*path', to: 'home#index'
end
