class Saler < ApplicationRecord

  include Rails.application.routes.url_helpers
  include Devise::JWT::RevocationStrategies::JTIMatcher
  has_many :books, dependent: :destroy

  devise :database_authenticatable, :registerable, :validatable,
  :jwt_authenticatable, jwt_revocation_strategy: self

  validates :name, presence: true, format: { with: /\A[a-zA-Z]+\z/, message: "enter valid"}
  validates :adress, presence: true
  validates :city, presence: true, format: { with: /\A[a-zA-Z\s]+\z/, message: "only allows valid city" }
  validates :email, format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i, message: "must be a valid email address" }
  validates :phoneno, format: { with: /\A\d{10}\z/, message: "must be a 10-digit number" }
  validates :password, length: { minimum: 8 }
  validate :passwords_match, on: :create

  has_one_attached :image

  validates :image_path, allow_blank: true, format: {
    with: %r{\.jpg|png|jpeg}i,
    message: 'must be a url for jpg,jpeg or png image.'
  }
  
  def passwords_match
    errors.add(:password_confirmation, "doesn't match Password") if password != password_confirmation
    puts "--------------------password:  #{password_confirmation.inspect}"
  end

  def image_path
    if image.attached?
      "http://192.168.1.8:3000#{rails_blob_path(image, only_path: true)}"
    else
      "http://192.168.1.8:3000/image/default12.jpeg"
    end
  end

end