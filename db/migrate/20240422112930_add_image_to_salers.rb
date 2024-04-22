class AddImageToSalers < ActiveRecord::Migration[5.2]
  def change
    add_column :salers, :image, :string
  end
end
