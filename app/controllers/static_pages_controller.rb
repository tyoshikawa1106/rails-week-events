class StaticPagesController < ApplicationController
  def index
    @events_all = Event.all();
  end

  def create_event
    @event = Event.new(
      subject: params[:subject],
      location: params[:location],
      description: params[:description],
      start_date_time: Time.now
    );
    @event.save;
    render nothing: true
  end
end
