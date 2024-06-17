class ChangeColumnTypeInCarts < ActiveRecord::Migration[5.2]
  def change
    remove_column :carts, :book  # Remove the incorrect column
    add_reference :carts, :book, foreign_key: true  # Add the corrected reference column
  end
end
