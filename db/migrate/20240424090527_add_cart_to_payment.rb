class AddCartToPayment < ActiveRecord::Migration[5.2]
  def change
    add_reference :payments, :cart, foreign_key: true
  end
end
