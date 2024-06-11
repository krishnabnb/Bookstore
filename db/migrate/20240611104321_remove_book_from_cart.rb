class RemoveBookFromCart < ActiveRecord::Migration[5.2]
  def change
    remove_column :carts, :book, :referances
  end
end
