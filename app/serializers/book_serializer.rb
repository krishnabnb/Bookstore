class BookSerializer
  include JSONAPI::Serializer
  attributes :title, :author, :description, :release_date, :price, :image
end
