class Cart < ApplicationRecord
  belongs_to :customer
  belongs_to :book
  has_many :payments, dependent: :destroy
end
