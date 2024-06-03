class AddAdressToSalers < ActiveRecord::Migration[5.2]
  def change
    add_column :salers, :adress, :string
  end
end
