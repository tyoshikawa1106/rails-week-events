module StaticPagesHelper

  # クラス変数の初期化
  def init
    @events_all = []
    @events_sun = []
    @events_mon = []
    @events_tue = []
    @events_wed = []
    @events_thu = []
    @events_fri = []
    @events_sat = []
  end

  # 全てのEvent情報を取得
  def getAllEvents
    return Event.all()
                .where.not(start_date_time: nil)
                .order('start_date_time desc')
                .limit(200)
  end

  # 今週のEvent情報を取得
  def getWeekEvents
    return Event.all()
                .where.not(start_date_time: nil)
                .order('start_date_time asc')
                .limit(200)
  end

  # 曜日毎のEventsに値をセット
  def setWeekEvents(wk_events)
    for event in wk_events do
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
