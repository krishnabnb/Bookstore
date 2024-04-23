class CreateSalers < ActiveRecord::Migration[5.2]
  def change
    create_table :salers do |t|
      t.string :name
      t.string :email
      t.string :book_title
      t.decimal :price
      t.timestamps
    end
  end
end
