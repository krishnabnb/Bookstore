Rails.application.routes.draw do
  root to: 'home#index'

  get 'current_customer', to: 'current_customer#index'

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
      resources :salers do
        member do
          delete 'image_destroy'
        end
      end
      resources :books do
        # post 'update_image', to: 'book_show#update_image', on: :member
        # delete 'delete_image', to: 'book_show#delete_image'

        member do
          patch  'update_status'
          delete 'image_destroy'
          get 'default_banner_image' 
          patch 'update_banner_image'
          delete 'remove_banner_image'
           
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

  #   get '*path', to: 'home#index'

  delete 'logout', to: 'sessions#destroy'
end
