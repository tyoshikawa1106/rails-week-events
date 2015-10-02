class StaticPagesController < ApplicationController
  include StaticPagesHelper

  def index
    # クラス変数の初期化
    init()
    # すべてのEvent情報を取得
    @events_all = getAllEvents()
    # 今週のEvent情報を取得
    wk_events = getWeekEvents()
    # 曜日毎のEventsに値をセット
    setWeekEvents(wk_events);
  end
end
