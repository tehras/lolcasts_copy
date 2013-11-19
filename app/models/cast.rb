class Cast < ActiveRecord::Base

  acts_as_votable

  def update_vote(vote,id)

    cast = Cast.find(id)

    if vote == "+" then
      cast.upvote += 1
    else
      cast.downvote += 1
    end
    cast.save
  end
end
