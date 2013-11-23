class AddLinkToCasts < ActiveRecord::Migration
  def change
    add_column :casts, :link3, :string
    add_column :casts, :link4, :string
    add_column :casts, :link5, :string
    add_column :casts, :link6, :string
    add_column :casts, :link7, :string
  end
end
