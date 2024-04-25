class Book < ApplicationRecord
  has_many :carts, dependent: :destroy

  before_save :set_published_status

  private
  
  def set_published_status
    published_date = Date.parse(published_at)
    self.published_status = (published_date <= Date.current) ? 'published' : 'unpublished'
  end
  
end
