class Api::V1::SalerBooksController < ApplicationController
  before_action :authenticate_saler!

  def index
    @books = current_saler.books
    Rails.logger.debug "Books: #{@books.inspect}"
    render json: {book: BookSerializer.new( @books).serializable_hash[:data]}
  end
end
