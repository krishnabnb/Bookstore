class Saler < ApplicationRecord
  include Rails.application.routes.url_helpers

  has_one_attached :image
  validates :image_path, allow_blank: true, format: {
    with: %r{\.jpg|png|jpeg}i,
    message: 'must be a url for jpg,jpeg or png image.'
  }

  def image_path
    if image.attached?
      "http://192.168.1.8:3000#{rails_blob_path(image, only_path: true)}"
    else
      "http://192.168.1.8:3000/image/default12.jpeg"
    end
  end
end
