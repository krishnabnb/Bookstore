class RemovePriceFromSalers < ActiveRecord::Migration[5.2]
  def change
    remove_column :salers, :price, :decimal
  end
end
