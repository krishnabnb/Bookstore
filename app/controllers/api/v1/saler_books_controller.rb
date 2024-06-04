class Api::V1::SalerBooksController < ApplicationController
  before_action :authenticate_saler!

  def index
    @books = current_saler.books
    render json: @books, status: :ok
  end
end
