class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :emaul
      t.string :subject
      t.string :massage

      t.timestamps
    end
  end
end
