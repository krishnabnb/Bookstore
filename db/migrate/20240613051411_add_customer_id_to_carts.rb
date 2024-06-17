class AddCustomerIdToCarts < ActiveRecord::Migration[5.2]
  def change
    add_reference :carts, :customer, foreign_key: true
  end
end
