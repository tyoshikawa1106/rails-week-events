module ApplicationHelper
  # 曜日を取得
  def getWeek(date)
    wday = date.wday
    if wday === 0
      return 'Sun'
    elsif wday === 1
      return 'Mon'
    elsif wday === 2
      return 'Tue'
    elsif wday === 3
      return 'Wed'
    elsif wday === 4
      return 'Thu'
    elsif wday === 5
      return 'Fri'
    elsif wday === 6
      return 'Sat'
    end
  end
end
