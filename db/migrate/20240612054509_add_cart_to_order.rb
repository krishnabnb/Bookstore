class AddCartToOrder < ActiveRecord::Migration[5.2]
  def change
    add_column :orders, :cart, :referances
  end
end
