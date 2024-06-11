class OrderItemSerializer
  include JSONAPI::Serializer
  attributes :id, :quantity, :price, :order_id, :book_id
  belongs_to :order
  belongs_to :book, serializer: BookSerializer

end
