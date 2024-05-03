class AddJtiToCustomers < ActiveRecord::Migration[5.2]
  def change
    add_column :customers, :jti, :string
    add_index :customers, :jti
  end
end
