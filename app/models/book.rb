class Book < ApplicationRecord
  has_many :carts, dependent: :destroy

  # before_commit :set_published_status

  # private

  # def set_published_status
  #   puts "--------------------Debug: set_published_status callback triggered"
  #   CheckPublishedBooksJob.perform_now
  # end


end
