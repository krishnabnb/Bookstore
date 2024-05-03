class CustomerSerializer
  include JSONAPI::Serializer
  attributes :id, :email, :created_at

  attribute :created_date do |customer|
    customer && customer.created_at.strftime('%d/%m/%Y')
  end
  
end
