namespace :books do
  desc "Update published status of books"
  task check_published: :environment do
    CheckPublishedBooksJob.perform_now
  end
end
