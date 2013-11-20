class Cast < ActiveRecord::Base

  acts_as_votable

  #searchable do
  #
  #  text :red_team, :blue_team, :tournament_name, :boost =>5
  #  text :caster, :boost =>3
  #  end
  def self.search(search)
    if search
      Cast.where('lower(blue_team) LIKE ? OR lower(red_team) LIKE ? OR lower(caster) LIKE ? OR lower(tournament_name) LIKE ?', "%#{search}%","%#{search}%","%#{search}%","%#{search}%").includes(:votes).order("cached_votes_score").reverse_order
    else
      scoped
    end
  end
end
