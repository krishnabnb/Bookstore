class RemoveCustomerFromPayment < ActiveRecord::Migration[5.2]
  def change
    remove_reference :payments, :customer, foreign_key: true
  end
end
