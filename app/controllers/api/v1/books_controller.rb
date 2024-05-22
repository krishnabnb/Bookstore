class Api::V1::BooksController < ApplicationController
  # before_action :authenticate_customer!
  before_action :set_book, only: [:show, :update, :destroy, :image_destroy]

  def index
    @books = Book.all
    @books = @books.where("title LIKE ?", "%#{params[:title]}%") if params[:title].present?
    @books = @books.where("description LIKE ?", "%#{params[:description]}%") if params[:description].present?
    @books = @books.where(published_at: params[:published_at]) if params[:published_at].present?
    @books = @books.where(published_status: params[:published_status]) if params[:published_status].present?
    render json: {book: BookSerializer.new( @books).serializable_hash[:data]}
  end

  def show
    @book = Book.find(params[:id])
    render json: {book: BookSerializer.new(@book).serializable_hash[:data]}, status: :ok
  end

  def image_destroy
    if @book.image.attached?
      @book.image.purge
      render json: { message: "Image deleted successfully" }, status: :ok
    else
      render json: { errors: "No image attached to this book" }, status: :unprocessable_entity
    end
  end

  def update_status
    @book = Book.find(params[:id])
    if @book.published_status == "published"
      @book.update(published_status: "unpublished")
    elsif @book.published_status == "unpublished"
      @book.update(published_status: "published", published_at: Date.current)
    else
      render json: { error: "Invalid published status" }, status: :unprocessable_entity
    end
    render json: @book
  end

  def create
    @book = Book.new(book_params)
    if @book.save
    CheckPublishedBooksJob.perform_now
    render json: { book: BookSerializer.new(@book).serializable_hash[:data] }, status: :ok
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  def update
    if @book.update(book_params)
      render json: {book: BookSerializer.new( @book).serializable_hash[:data]}, status: :ok
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @book.destroy
    render json: { message: "Book destroyed successfully" }, status: :ok
  end

  private
  def set_book
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:title, :author, :description, :release_date, :price, :published_status, :published_at, :image)
  end

end
