class Contact < ApplicationRecord

    validates :email, format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i, message: "must be a valid email address" }
    validates :phone_number, format: { with: /\A\d{10}\z/, message: "must be a 10-digit number" }


end
