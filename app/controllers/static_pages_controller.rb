class StaticPagesController < ApplicationController
  def index
    @events_all = Event.all().where.not(start_date_time: nil).order('start_date_time asc')
    @events_sun = []
    @events_mon = []
    @events_tue = []
    @events_wed = []
    @events_thu = []
    @events_fri = []
    @events_sat = []

    # 曜日毎のEventsを取得
    getWeekEvents();
  end

  private
    # 曜日毎のEventsを取得
    def getWeekEvents
      for event in @events_all do
        wday = event.start_date_time.wday

        if wday === 0
          @events_sun.push(event)
        elsif wday === 1
          @events_mon.push(event)
        elsif wday === 2
          @events_tue.push(event)
        elsif wday === 3
          @events_wed.push(event)
        elsif wday === 4
          @events_thu.push(event)
        elsif wday === 5
          @events_fri.push(event)
        elsif wday === 6
          @events_sat.push(event)
        end
      end
    end
end
