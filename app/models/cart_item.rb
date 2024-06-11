class CartItem < ApplicationRecord
  belongs_to :book
  belongs_to :cart

  validates :quantity, presence: true, numericality: { greater_than: 0 }
  validates :book_id, uniqueness: { scope: :cart_id, message: "is already in the cart" }


  def total
    book.price * quantity   
  end
end
