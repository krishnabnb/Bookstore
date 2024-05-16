class SalerSerializer
  include JSONAPI::Serializer

  attributes :id, :name, :email, :book_title, :price, :image
end

