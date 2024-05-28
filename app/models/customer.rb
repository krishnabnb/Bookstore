class Customer < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable

  include Devise::JWT::RevocationStrategies::JTIMatcher

  devise :database_authenticatable, :registerable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self

  has_many :carts, dependent: :destroy

  
  validates :firstname, presence: true, format: { with: /\A[a-zA-Z]+\z/, message: "enter valid"}
  validates :lastname, presence: true, format: { with: /\A[a-zA-Z]+\z/, message: "enter valid" }
  validates :address, presence: true
  validates :city, presence: true, format: { with: /\A[a-zA-Z\s]+\z/, message: "only allows valid city" }
  validates :email, format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i, message: "must be a valid email address" }
  validates :contactno, format: { with: /\A\d{10}\z/, message: "must be a 10-digit number" }
  validates :password, length: { minimum: 6 }
  validate :passwords_match, on: :create

  def passwords_match
    errors.add(:password_confirmation, "doesn't match Password") if password != password_confirmation
    puts "--------------------password:  #{password_confirmation.inspect}"
  end

end