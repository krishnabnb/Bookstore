class CreatePayments < ActiveRecord::Migration[5.2]
  def change
    create_table :payments do |t|
      t.string :amount
      t.string :date
      t.string :mathod
      t.references :customer, foreign_key: true

      t.timestamps
    end
  end
end
