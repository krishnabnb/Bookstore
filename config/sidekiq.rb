Sidekiq::Cron::Job.create(
  name: 'Check Published Books Daily',
  cron: '0 0 * * *',
  class: 'CheckPublishedBooksJob'
)
