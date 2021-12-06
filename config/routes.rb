Rails.application.routes.draw do
  #Medium routes
  resources :media 
  
  #List routes
  resources :lists 

  #User routes
  post '/signup', to: 'users#create'
  patch '/users/:id', to: 'users#update'
  get '/me', to: 'users#show'
  get '/users', to: 'users#index'

  #Session routes
  post '/signin', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
