Rails.application.routes.draw do
  resources :events
  root to: 'static_pages#index'
end