class Book < ApplicationRecord
  include Rails.application.routes.url_helpers

  has_many :carts, dependent: :destroy
  has_one_attached :image

  def image_url
    if image.attached?
      "http://192.168.1.11:3000#{rails_blob_path(image, only_path: true)}"
<<<<<<< HEAD
    else
      "http://192.168.1.11:3000/image/default.jpeg"
=======
>>>>>>> 65f5cc89f21a5099119a1641c0090e45e5b74af5
    end
  end
end
