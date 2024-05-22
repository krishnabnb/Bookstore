class Book < ApplicationRecord
  include Rails.application.routes.url_helpers

  has_many :carts, dependent: :destroy
  has_one_attached :image
  has_one_attached :banner_image

  def image_url
    if image.attached?
      "http://192.168.1.11:3000#{rails_blob_path(image, only_path: true)}"
    else
      "http://192.168.1.11:3000/image/default.jpeg"
    end
  end

  def banner_image_url
    if banner_image.attached?
      "http://192.168.1.11:3000#{rails_blob_path(banner_image, only_path: true)}"
    else
      "http://192.168.1.11:3000/image/deflt.jpeg"
    end
  end
end

