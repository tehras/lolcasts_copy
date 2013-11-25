class AddUserIdToCast < ActiveRecord::Migration
  def change
    add_column :casts, :user_id, :integer
  end
end
