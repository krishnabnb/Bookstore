class RemoveSignupCompletedFromCustomers < ActiveRecord::Migration[5.2]
  def change
    remove_column :customers, :signup_completed, :boolean
  end
end
