class EventsController < ApplicationController

  def create
    @event = Event.new(
      subject: params[:subject],
      location: params[:location],
      description: params[:description],
      start_date_time: Time.now
    );
    @event.save;
    render nothing: true
  end

  def destroy
    Event.find(params[:id]).destroy
    flash[:success] = "Delete!"
    redirect_to root_path
  end
end
