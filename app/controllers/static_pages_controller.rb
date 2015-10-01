class StaticPagesController < ApplicationController
  def index
    @events_all = Event.all();
  end
end
