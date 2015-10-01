class StaticPagesController < ApplicationController
  def index
    @events_all = Event.all()
    @events_sun = []
    @events_mon = []
    @events_tue = []
    @events_wed = []
    @events_thu = []
    @events_fri = []
    @events_sat = []

    for event in @events_all do
      @events_sun.push(event)
    end

  end
end
