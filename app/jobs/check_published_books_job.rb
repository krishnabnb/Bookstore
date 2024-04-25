
class CheckPublishedBooksJob < ApplicationJob
  queue_as :default

  def perform(book_id)
    book = book.find_by(id: book_id)
    return unless book
    book.update_published_status

  end
end
