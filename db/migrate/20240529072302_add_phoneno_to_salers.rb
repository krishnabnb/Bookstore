class AddPhonenoToSalers < ActiveRecord::Migration[5.2]
  def change
    add_column :salers, :phoneno, :string
  end
end
