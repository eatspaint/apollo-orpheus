require_relative 'boot'

require "rails"
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "action_cable/engine"
require "sprockets/railtie"

Bundler.require(*Rails.groups)

module Orpheus
  class Application < Rails::Application

    if Rails.env.development?
      begin
        YAML.load(File.read('config/spotify.yml')).each do |key, value|
          ENV[key] = value
        end
      rescue
        raise "You need to add config/spotify.yml"
      end
    end

  end
end

RSpotify::authenticate(ENV['client_id'], ENV['client_secret'])