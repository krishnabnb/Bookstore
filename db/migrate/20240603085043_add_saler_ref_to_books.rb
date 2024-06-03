class AddSalerRefToBooks < ActiveRecord::Migration[5.2]
  def change
    add_reference :books, :saler, foreign_key: true
  end
end
