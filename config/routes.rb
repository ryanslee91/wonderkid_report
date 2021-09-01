Rails.application.routes.draw do
resources :leagues 
resources :players 
post '/auth/login', to: 'authentication#login'
get '/auth/verify', to: 'authentication#verify'
resources :users
get '/players/:player_id/leagues/:id', to: 'leagues#add_to_player'

match '*path', to: 'application#cors_preflight_check', via: [:options]
end
