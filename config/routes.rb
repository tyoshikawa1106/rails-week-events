Rails.application.routes.draw do

  resources :events

  root to: 'static_pages#index'
  get "static_pages/create_event"
end