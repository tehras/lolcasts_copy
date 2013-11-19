json.array!(@casts) do |cast|
  json.extract! cast, :match_type, :red_team, :blue_team, :best_of, :tournament_name, :caster, :link, :link2, :upvote, :downvote, :count
  json.url cast_url(cast, format: :json)
end
