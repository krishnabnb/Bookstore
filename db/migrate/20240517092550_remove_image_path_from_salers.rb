class RemoveImagePathFromSalers < ActiveRecord::Migration[5.2]
  def change
    remove_column :salers, :image_path, :string
  end
end
