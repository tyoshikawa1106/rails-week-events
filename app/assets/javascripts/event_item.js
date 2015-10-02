EventItemJs = (function() {
  "use strict";

  function EventItemJs() {}

  EventItemJs.openEditEventModal = function(eventId) {
    $('#edit-event-modal-' + eventId).removeClass("slds-hide");
    $('#edit-event-modal-' + eventId).addClass("slds-show");
    return false;
  }

  EventItemJs.closeEditEventModal = function(eventId) {
    $('#edit-event-modal-' + eventId).removeClass("slds-show");
    $('#edit-event-modal-' + eventId).addClass("slds-hide");
    return false;
  }

  EventItemJs.saveEvent = function() {
    $.ajax({
      url: "/events/:id/edit",
      type: "PUT",
      data: {
        id : $('#edit-id').val(),
        subject : $('#edit-subject').val(),
        location: $('#edit-location').val(),
        description: $('#edit-description').val(),
      },
      dataType: "html",
      success: function(data) {
        HeaderJs.closeNewEventModal();
      },
      error: function(data) {
        alert("Error!");
      }
    });

    return false;
  }

  return EventItemJs;
})();