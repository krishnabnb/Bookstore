class Book < ApplicationRecord
  include Rails.application.routes.url_helpers

  has_many :carts, dependent: :destroy
  has_one_attached :image
  has_one_attached :banner_image
  validates :image_url, allow_blank: true, format: {
    with: %r{\.jpg|png|jpeg}i,
    message: 'must be a url for jpg,jpeg or png image.'
  }
  validates :banner_image_url, allow_blank: true, format: {
    with: %r{\.jpg|png|jpeg}i,
    message: 'must be a url for jpg,jpeg or png image.'
  }


  def image_url
    if image.attached?
      "http://192.168.1.8:3000#{rails_blob_path(image, only_path: true)}"
    else
      "http://192.168.1.8:3000/image/default12.jpeg"
    end
  end

  def banner_image_url
    if banner_image.attached?
      "http://192.168.1.8:3000#{rails_blob_path(banner_image, only_path: true)}"
    else
      # "http://192.168.1.8:3000/image/default12.jpeg"
      nil
    end 
  end
end

