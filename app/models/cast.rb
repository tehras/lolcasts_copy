class Cast < ActiveRecord::Base

  acts_as_votable

  searchable do
    text :red_team, :blue_team
    end
end
