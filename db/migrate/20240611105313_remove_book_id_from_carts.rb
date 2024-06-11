class RemoveBookIdFromCarts < ActiveRecord::Migration[5.2]
  def change
    remove_column :carts, :book_id
  end
end
