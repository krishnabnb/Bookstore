class OrderItem < ApplicationRecord
  belongs_to :order
  belongs_to :book

  def subtotal
    quantity * book.price
  end 

end
