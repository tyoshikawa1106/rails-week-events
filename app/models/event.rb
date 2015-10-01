class Event < ActiveRecord::Base
  validates :subject, presence: true
end
