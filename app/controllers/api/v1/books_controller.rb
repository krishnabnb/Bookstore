class Api::V1::BooksController < ApplicationController
  before_action :set_book, only: [:show, :update, :destroy, :image_destroy, :update_banner_image]

  def index
    @books = Book.all
    @books = @books.where("title LIKE ?", "%#{params[:title]}%") if params[:title].present?
    @books = @books.where("description LIKE ?", "%#{params[:description]}%") if params[:description].present?
    @books = @books.where(published_status: params[:published_status]) if params[:published_status].present?
    
    if params[:start_date].present? && params[:end_date].present?
      @books = @books.where(published_at: params[:start_date]..params[:end_date])
    end
    
    render json: {book: BookSerializer.new(@books).serializable_hash[:data]}
  end

  def show
    @book = Book.find(params[:id])
    book_data = BookSerializer.new(@book).serializable_hash[:data]
    book_data[:banner_image_url] = @book.banner_image_url 
    render json: { book: book_data }, status: :ok
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
    render json: { message: "Book status updated successfully" }, status: :ok
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
    if @book 
      if @book.update(book_params)
        if params[:banner_image].present?
          @book.banner_image.attach(params[:banner_image])
          render json: { message: 'Banner image updated successfully', book: BookSerializer.new(@book).serializable_hash[:data] }, status: :ok
        else
          render json: { book: BookSerializer.new(@book).serializable_hash[:data], message: 'Book details updated successfully' }, status: :ok
        end
      else
        render json: { error: @book.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: "Book not found" }, status: :not_found
    end
  end
  
  def destroy
    if book_in_cart?
      render json: { message: "Book is already in a cart item and cannot be deleted" }, status: :unprocessable_entity
    else
      @book.destroy
      render json: { message: "Book destroyed successfully" }, status: :ok
    end
  end


  def image_destroy
    if @book.image.attached? && params[:type] == "image"
      @book.image.purge
      render json: { message: "Image deleted successfully" }, status: :ok
    elsif @book.banner_image.attached? && params[:type] == "banner_image"
      @book.banner_image.purge
      render json: { message: "Banner image deleted successfully" }, status: :ok
    else
      render json: { errors: "No image attached to this book or invalid type specified" }, status: :unprocessable_entity
    end
  end
  
  private

  def set_book
    @book = Book.find(params[:id])
  end

  def book_in_cart?
    CartItem.exists?(book_id: @book.id)
  end
  

  def book_params
    params.require(:book).permit(:title, :author, :description, :release_date, :price, :published_status, :published_at, :image, :banner_image, :saler_id)
  end
end

