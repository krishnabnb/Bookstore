class RenameEmaulToEmailInContacts < ActiveRecord::Migration[5.2]
  def change
    rename_column :contacts, :emaul, :email
  end
end
