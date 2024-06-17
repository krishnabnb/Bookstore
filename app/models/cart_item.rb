class CartItem < ApplicationRecord
  belongs_to :book
  belongs_to :cart

  validates :book_id, uniqueness: { scope: :cart_id, message: "is already in the cart" }

end
  