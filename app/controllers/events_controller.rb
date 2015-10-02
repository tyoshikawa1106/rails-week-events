class EventsController < ApplicationController
  include StaticPagesHelper

  def create
    @event = Event.new(
      subject: params[:subject],
      location: params[:location],
      description: params[:description],
      start_date_time: Time.now
    );
    @event.save;

    redirect_to root_path
  end

  def destroy
    Event.find(params[:id]).destroy
    redirect_to root_path
  end

  def show

  end

  def update
    @event = Event.find(params[:id])
    if @event.update_attributes(event_edit_params)
      flash[:success] = "Event updated"
      redirect_to root_path
    else
      redirect_to root_path
    end
  end

  private
    def event_edit_params
      params.require(:event).permit(:subject, :location, :description)
    end
end
