Lolcasts::Application.routes.draw do
  resources :casts

  post "/vote" => "casts#vote"

  post "/match_type" => "casts#match"

  get 'top', to: 'home#top'
  post 'top', to: 'home#query_find'

  get 'tags/:tag', to: 'casts#tag', as: :tag

  get 'edit_casts', to: 'casts#edit_casts'

  get 'stream', to: 'home#stream'

  get 'all_streams', to: 'home#all_streams'

  root :to => "home#index"
  devise_for :users
end