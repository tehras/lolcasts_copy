Lolcasts::Application.routes.draw do
  resources :casts

  post "/vote" => "casts#vote"

  get 'top', to: 'home#top'

  root :to => "home#index"
  devise_for :users
end
