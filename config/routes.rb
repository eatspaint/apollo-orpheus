Rails.application.routes.draw do
  get '/discovery', to: 'discoveries#index'
end
