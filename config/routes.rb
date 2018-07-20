Rails.application.routes.draw do  
  devise_for :users
  resources :posts do
  	resources :comments
  end
  resources :customers, only: [ :index ]
  root 'dashboard#index'
  get "angular_test", to: "angular_test#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
