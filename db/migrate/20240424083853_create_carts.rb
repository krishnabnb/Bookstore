class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.references :customer, foreign_key: true
      t.references :book, foreign_key: true
      t.integer :quntity

      t.timestamps
    end
  end
end
