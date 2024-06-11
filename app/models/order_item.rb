class OrderItem < ApplicationRecord
  belongs_to :order
  belongs_to :book

  validates :quantity, presence: true, numericality: { greater_than: 0 }
  validates :price, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validate :unique_book_per_order

  def total_price
    quantity * price
  end

  private

  def unique_book_per_order
    if order.order_items.where(book_id: book_id).exists?
      errors.add(:book_id, "has already been added to this order")
    end
  end
end
