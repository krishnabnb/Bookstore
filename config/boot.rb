ENV['BUNDLE_GEMFILE'] ||= File.expand_path('../Gemfile', __dir__)

require 'bundler/setup' # Set up gems listed in the Gemfile.
require 'bootsnap/setup' # Speed up boot time by caching expensive operations.

# if Gem::Version.new(Bundler::VERSION) < Gem::Version.new(Bundler::LOCKED_VERSION)
#   abort "Bundler version is too old. Please update with `gem install bundler:#{Bundler::LOCKED_VERSION}`."
# end
