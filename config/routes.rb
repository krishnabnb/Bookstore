Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'saler_books/index'
    end
  end
  devise_for :salers, path: '', path_names: {
    registration: 'salers/signup',
    sign_in: 'salers/login',
    sign_out: 'salers/logout'
  }, controllers: {
    registrations: 'salers/registrations',
    sessions: 'salers/sessions'
  }

  root to: 'home#index'
  get 'current_saler', to: 'current_saler#index'

  get 'current_customer', to: 'current_customer#index'

  devise_for :customers, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'customers/sessions',
    registrations: 'customers/registrations'
  }

  namespace :api do
    namespace :v1 do
      resources :salers , only: [:index, :show, :update, :destroy] do
        member do
          delete 'image_destroy'
        end
      end
  
      resources :books do
        member do
          patch  'update_status'
          delete 'image_destroy'
        end
      end
      resources :customers, only: [:index, :show, :create, :update, :destroy]
      resources :payments
      resources :carts
      resources :contacts
    end
  end

  get '*path', to: 'home#index', constraints: lambda { |req|
    req.format.html?
  }
  delete 'logout', to: 'sessions#destroy'
end
