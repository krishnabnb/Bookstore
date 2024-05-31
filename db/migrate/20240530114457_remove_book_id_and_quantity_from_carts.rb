class RemoveBookIdAndQuantityFromCarts < ActiveRecord::Migration[5.2]
  def change
    remove_column :carts, :book_id, :integer
    remove_column :carts, :quantity, :integer
  end
end
