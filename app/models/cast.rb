class Cast < ActiveRecord::Base

  belongs_to :user

  acts_as_votable
  acts_as_taggable

   validates :red_team, presence: true, length: { in: 2..8,
    too_short: "must have at least 2 letters",
    too_long: "must be less than 9 letters"}
   validates :blue_team, presence: true, length: { in: 2..8 ,
                                                   too_short: "must have at least 2 letters",
                                                   too_long: "must be less than 9 letters"}
   validates :caster, presence: true, length: { in: 2..15 ,
                                                too_short: "must have at least 2 letters",
                                                too_long: "must be less than 15 letters"}
   validates :tournament_name, presence: true


  def self.search(search)
    if search
      search = search.downcase
      Cast.where('lower(blue_team) LIKE ? OR lower(red_team) LIKE ? OR lower(caster) LIKE ? OR lower(tournament_name) LIKE ?', "%#{search}%","%#{search}%","%#{search}%","%#{search}%").includes(:votes).order("cached_votes_score").reverse_order
    else
      scoped
    end
  end
end
