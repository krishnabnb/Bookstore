namespace :books do
  desc "Update published status of books"
  task check_published: :environment do
    Book.where("published_at <= ?", Date.today).each do |book|
      CheckPublishedBooksJob.perform_later(book.id)
    end
  end
endx