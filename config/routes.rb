Lolcasts::Application.routes.draw do
  resources :casts

  post "/vote" => "casts#vote"

  post "/match_type" => "casts#match"

  get 'top', to: 'home#top'

  get 'tags/:tag', to: 'casts#tag', as: :tag

  get 'edit_casts', to: 'casts#edit_casts'

  root :to => "home#index"
  devise_for :users
end
