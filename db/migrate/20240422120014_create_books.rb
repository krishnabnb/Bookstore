class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :description
      t.date :release_date
      t.decimal :price

      t.timestamps
    end
  end
end
