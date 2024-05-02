Rails.application.routes.draw do
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

  get 'cart', action: :index, controller: 'home'
  get 'customer', action: :index, controller: 'home'
  get 'bio', action: :index, controller: 'home'
  get 'contect', action: :index, controller: 'home'
  get 'book', action: :index, controller: 'home'
  get 'product', action: :index, controller: 'home'
  get 'classics', action: :index, controller: 'home'
  get 'crime', action: :index, controller: 'home'
  get 'adventure', action: :index, controller: 'home'
  get 'science', action: :index, controller: 'home'
  get 'romance', action: :index, controller: 'home'
  get 'novel', action: :index, controller: 'home'
  get 'horror', action: :index, controller: 'home'
  get 'historical', action: :index, controller: 'home'
  get 'business', action: :index, controller: 'home'
  get 'SignIn', action: :index, controller: 'home'
  get 'historical', action: :index, controller: 'home'
  get 'saler', action: :index, controller: 'home'
  get 'SignUp', action: :index, controller: 'home'
end
