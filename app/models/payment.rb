class Payment < ApplicationRecord
  belongs_to :cart
  enum method: {
    cash: 0,
    online_payment: 1
  }

  before_save :calculate_amount
  before_save :set_current_date

  private 

  def calculate_amount 
    self.amount = quantity * price
  end

  def quantity
    cart.quntity
  end

  def price
    cart.book.price  
  end

  def set_current_date
    self.date = Date.today
  end
end

