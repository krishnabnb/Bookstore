class AddEmailAndPasswordDigestToCustomers < ActiveRecord::Migration[5.2]
  def change
    add_column :customers, :email, :string
    add_column :customers, :password_digest, :string
  end
end
