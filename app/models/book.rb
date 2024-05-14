class Book < ApplicationRecord
  has_many :carts, dependent: :destroy
  has_many_attached :images

end
