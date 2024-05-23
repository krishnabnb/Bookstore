class BookSerializer
  include JSONAPI::Serializer
  attributes :id, :title, :author, :description,:published_at, :published_status, :price, :image_url, :banner_image_url

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
