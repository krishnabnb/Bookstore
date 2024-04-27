class Saler < ApplicationRecord
  include Rails.application.routes.url_helpers

  has_one_attached :image

  def image_path
    if image.attached?
      # "http://localhost:3000#{rails_blob_path(image, only_path: true)}" if image.present?
    end
  end
end
