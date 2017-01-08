Rails.application.routes.draw do
  # DISCOVERY
  get '/discovery', to: 'discoveries#index'

  post '/discoveries/generate'
end
