class RemoveQuntityFromCarts < ActiveRecord::Migration[5.2]
  def change
    remove_column :carts, :book_id, :integer
    remove_column :carts, :quntity, :integer
  end
end
