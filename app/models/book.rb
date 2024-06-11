class Book < ApplicationRecord
  include Rails.application.routes.url_helpers

  belongs_to :saler
  has_one_attached :image
  has_one_attached :banner_image

  validates :title, presence: true
  validates :author, presence: true
  validates :description, presence: true
  validates :price, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :published_at, presence: true, format: { with: /\A\d{4}-\d{2}-\d{2}\z/, message: "must be in the format YYYY-MM-DD" }

  validates :image_url, allow_blank: true, format: {
    with: %r{\.jpg|png|jpeg}i,
    message: 'must be a for jpg,jpeg or png image.'
  }
  validates :banner_image_url, allow_blank: true, format: {
    with: %r{\.jpg|png|jpeg}i,
    message: 'must be a  for jpg,jpeg or png image.'
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
      "http://192.168.1.8:3000/image/default12.jpeg"
    endx
  end
end

