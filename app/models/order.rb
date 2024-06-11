class Order < ApplicationRecord
  belongs_to :customer
  has_many :order_items, dependent: :destroy

  validates :total_price, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :status, presence: true, inclusion: { in: %w[pending paid shipped completed canceled] }
  validates :book_id, uniqueness: { scope: :customer_id, message: "has already been ordered by this customer" }

end
