class CartItem < ApplicationRecord
  belongs_to :book
  belongs_to :cart
  validates :quantity, presence: true, numericality: { greater_than: 0 }
end
