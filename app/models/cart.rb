class Cart < ApplicationRecord
  belongs_to :customer , optional: true

  has_many :cart_items, dependent: :destroy
  has_many :payments, dependent: :destroy

  def total
    cart_items.to_a.sum{|cart_items| cart_item.total_price}
  end
end

