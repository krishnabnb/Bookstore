class ChangeMathodDataTypeInPayments < ActiveRecord::Migration[5.2]
  def change
    change_column :payments, :mathod, :integer

  end
end
