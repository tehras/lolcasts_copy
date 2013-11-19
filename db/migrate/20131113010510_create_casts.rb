class CreateCasts < ActiveRecord::Migration
  def change
    create_table :casts do |t|
      t.string :match_type
      t.string :red_team
      t.string :blue_team
      t.integer :best_of
      t.string :tournament_name
      t.string :caster
      t.string :link
      t.string :link2
      t.integer :upvote
      t.integer :downvote
      t.integer :count

      t.timestamps
    end
  end
end
