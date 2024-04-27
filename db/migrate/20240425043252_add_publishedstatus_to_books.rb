class AddPublishedstatusToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :published_status, :string
  end
end
