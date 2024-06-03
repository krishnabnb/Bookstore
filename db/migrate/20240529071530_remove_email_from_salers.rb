class RemoveEmailFromSalers < ActiveRecord::Migration[5.2]
  def change
    remove_column :salers, :email, :string
  end
end
