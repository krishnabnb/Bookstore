class RemoveBookTitleFromSalers < ActiveRecord::Migration[5.2]
  def change
    remove_column :salers, :book_title, :string
  end
end
