Rails.application.routes.draw do
  resources :bucket_lists
  resources :activities
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'

end
