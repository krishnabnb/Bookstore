class CreateCustomers < ActiveRecord::Migration[5.2]
  def change
    create_table :customers do |t|
      t.string :firstname
      t.string :lastname
      t.string :address
      t.string :city
      t.string :contactno

      t.timestamps
    end
  end
end
