class CheckPublishedBooksJob < ApplicationJob
  queue_as :default

  def perform(*args)
    @books = Book.all
    updated_books = []

    @books.each do |book|
      if book.published_at.present? && Date.parse(book.published_at) <= Date.current
        book.update(published_status: "published")
      else
        book.update(published_status: "unpublished")
      end
      updated_books << book
    end

    updated_books
  end
end
