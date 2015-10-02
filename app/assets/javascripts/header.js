HeaderJs = (function() {
  "use strict";

  function HeaderJs() {}

  HeaderJs.openNewEventModal = function() {
    $('#new-event-modal').removeClass("slds-hide");
    $('#new-event-modal').addClass("slds-show");
    return false;
  }

  HeaderJs.closeNewEventModal = function() {
    $('#new-event-modal').removeClass("slds-show");
    $('#new-event-modal').addClass("slds-hide");
    return false;
  }

  HeaderJs.saveEvent = function() {
    $.ajax({
      url: "events",
      type: "POST",
      data: {
        subject : $('#header-subject').val(),
        location: $('#header-location').val(),
        description: $('#header-description').val(),
      },
      dataType: "html",
      success: function(data) {
        HeaderJs.closeNewEventModal();
        location.href="/";
        return false;
      },
      error: function(data) {
        alert("Error!");
      }
    });

    return false;
  }

  return HeaderJs;
})();