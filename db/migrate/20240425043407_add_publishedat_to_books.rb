class AddPublishedatToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :published_at, :string
  end
end
