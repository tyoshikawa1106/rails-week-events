class EventsController < ApplicationController

  def destroy
    Event.find(params[:id]).destroy
    flash[:success] = "Delete!"
    redirect_to root_path
  end
end
