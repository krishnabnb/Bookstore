class CustomerSerializer
  include JSONAPI::Serializer
  attributes :id, :email, :firstname, :lastname, :address, :city, :contactno, :created_at

  attribute :created_date do |customer|
    customer.created_at&.strftime('%m/%d/%y')
  end 
end
