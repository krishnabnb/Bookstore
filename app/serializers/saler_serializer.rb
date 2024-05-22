class SalerSerializer
  include JSONAPI::Serializer

  attributes :id, :name, :email, :book_title, :price, :image_path

  def serializable_hash(*)
    begin
      hash = super
      # puts "hash record multiple #{hash}"
      record = { data: hash[:data].map { |obj| obj[:attributes]}}
    rescue
      record = super
      # puts"single record #{record}"
      record = { data: record[:data][:attributes]}
    end
  end
end