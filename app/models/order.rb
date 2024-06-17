class Order < ApplicationRecord
  belongs_to :customer
  has_many :order_items,   dependent: :destroy
  has_many :book, through: :order_items

  validates :total_price, presence: true, numericality: { greater_than: 0 }

  before_create :calculate_total_price

  validates :customer_id, presence: true

  private

  def calculate_total_price
    self.total_price = order_items.sum { |item| item.book.price * item.quantity }
  end
end
