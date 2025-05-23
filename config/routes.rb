Rails.application.routes.draw do
  get "customers/index"
  root "customers#index"
end
