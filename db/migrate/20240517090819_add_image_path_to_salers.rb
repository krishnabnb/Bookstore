class AddImagePathToSalers < ActiveRecord::Migration[5.2]
  def change
    add_column :salers, :image_path, :string
  end
end
