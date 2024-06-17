class ChangeColumnTypeInOrders < ActiveRecord::Migration[5.2]
  def change

    remove_column :orders, :cart  # Remove the incorrect column
    add_reference :orders, :cart, foreign_key: true  # Add the corrected reference column
  end
end
