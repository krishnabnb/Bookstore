class AddCityToSalers < ActiveRecord::Migration[5.2]
  def change
    add_column :salers, :city, :string
  end
end
