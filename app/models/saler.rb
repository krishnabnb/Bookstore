class Saler < ApplicationRecord
  include Rails.application.routes.url_helpers

  has_one_attached :image

  def image_path
    if image.attached?
      "http://192.168.1.11:3000#{rails_blob_path(image, only_path: true)}"
    else
      "http://192.168.1.11:3000/image/default.jpeg"
    end
  end
end
