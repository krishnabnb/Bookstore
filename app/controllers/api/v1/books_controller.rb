class Api::V1::BooksController < ApplicationController
  before_action :set_book,only:[:show, :update, :destroy]

  def index
    @books = Book.all
    if params[:title].present?
      @books = @books.where("title LIKE ?", "%#{params[:title]}%")
    end
    if params[:description].present?
      @books = @books.where("description LIKE ?", "%#{params[:description]}%")
    end
    if params[:published_status].present?
      @books = @books.where(published_status: params[:published_status])
    end
    if params[:published_at].present?
      @books = @books.where("published_at >= ?", DateTime.parse(params[:published_at]))
    end

    render json: @books
  end

  def show
    @book = Book.find(params[:id])
    render json: @book
  end

  def update_status
    @book = Book.find(params[:id])
    if @book.published_status == "published"
      @book.update(published_status: "unpublished" )
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
      render json: @book, status: :created
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  def update
    if @book.update(book_params)
      CheckPublishedBooksJob.perform_now
      render json: @book, status: :ok
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @book.destroy
    render json:{message: "book destroy succesfully"},status: :ok
  end

  private

  def set_book
    @book = Book.find(params[:id])
  end
  
  def book_params
    params.require(:book).permit(:title, :author, :description, :release_date, :price, :image, :published_status, :published_at)
  end

end

# def index
#   @students = Student.all
#   @students = Student.includes(:student_subs).all

#   @schools = School.all

#   if params[:name].present?
#     @students = @students.where("students.name LIKE ?", "%#{params[:name]}%")
#   end

#   if params[:contectno].present?
#     @students = @students.where("students.contectno LIKE ?", "%#{params[:contectno]}%")
#   end

#   if params[:gender].present?
#     @students = @students.where("students.gender LIKE ?", params[:gender])
#   end

#   if params[:school].present? && params[:school][:school_id].present?
#     @students = @students.where(school_id: params[:school][:school_id])
#   end
# end