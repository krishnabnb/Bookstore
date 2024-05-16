class Book < ApplicationRecord
  include Rails.application.routes.url_helpers

  has_many :carts, dependent: :destroy
  has_one_attached :image

  def image_url
    if image.attached?
      "http://192.168.1.3:3000#{rails_blob_path(image, only_path: true)}"
    end
  end
end
