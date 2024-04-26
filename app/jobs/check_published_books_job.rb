class CheckPublishedBooksJob < ApplicationJob
  queue_as :default

  def perform(*args)
    @books = Book.all
    updated_books = []
    @books.each do |book|
      if Date.parse(book.published_at) <= Date.current
        book.update(published_status: "published")
        # puts "----------------#{book.inspect}"
      else
        book.update(published_status: "unpublished")
      end
      updated_books << book
    end
    updated_books
  end
end
