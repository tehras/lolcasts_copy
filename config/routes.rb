Lolcasts::Application.routes.draw do
  resources :casts

  post "/vote" => "casts#vote"

  post "/match_type" => "casts#match"

  get 'top', to: 'home#top'

  root :to => "home#index"
  devise_for :users
end
