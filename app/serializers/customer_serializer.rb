class CustomerSerializer
  include JSONAPI::Serializer
  attributes :id, :email, :created_at

  attributes :created_date do |customer|
    customer.created_at && customer.created_at.strftime('%m/%d/%y')
  end 
end
