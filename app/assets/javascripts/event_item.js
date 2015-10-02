EventItemJs = (function() {
  "use strict";

  function EventItemJs() {}

  EventItemJs.openEditEventModal = function() {
    $('#edit-event-modal').removeClass("slds-hide");
    $('#edit-event-modal').addClass("slds-show");
  }

  EventItemJs.closeEditEventModal = function() {
    $('#edit-event-modal').removeClass("slds-show");
    $('#edit-event-modal').addClass("slds-hide");
  }

  return EventItemJs;
})();