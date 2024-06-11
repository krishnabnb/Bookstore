class AddBookToCart < ActiveRecord::Migration[5.2]
  def change
    add_column :carts, :book, :referances
  end
end
