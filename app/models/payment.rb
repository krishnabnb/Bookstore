class Payment < ApplicationRecord
  belongs_to :cart
  enum mathod:
  { 
    cash: 0,
    online_payment: 1 
  }
end
