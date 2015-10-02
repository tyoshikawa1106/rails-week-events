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

  return EventItemJs;
})();