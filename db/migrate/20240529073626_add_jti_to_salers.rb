class AddJtiToSalers < ActiveRecord::Migration[5.2]
  def change
    add_column :salers, :jti, :string
    add_index :salers, :jti
  end
end
