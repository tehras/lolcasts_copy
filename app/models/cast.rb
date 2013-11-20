class Cast < ActiveRecord::Base

  acts_as_votable

  searchable do
    text :red_team, :blue_team, :tournament_name, :boost =>5
    text :caster, :boost =>3
    end
end
