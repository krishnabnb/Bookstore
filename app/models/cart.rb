class Cart < ApplicationRecord
  belongs_to :customer , optional: true
  belongs_to :book
  has_many :cart_items, dependent: :destroy
  has_many :payments, dependent: :destroy
end
