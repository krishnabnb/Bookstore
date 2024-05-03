class RemoveEmailAndPasswordDigesFromCustomers < ActiveRecord::Migration[5.2]
  def change
    remove_column :customers, :email, :string
    remove_column :customers, :password_digest, :string
  end
end
