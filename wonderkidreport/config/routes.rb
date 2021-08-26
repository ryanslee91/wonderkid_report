Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
resources :positions 
resources :players 
post '/auth/login', to: 'authentication#login'
get '/auth/verify', to: 'authentication#verify'
resources :users
get '/players/:player_id/positions/:id', to: 'positions#add_to_player'
end
