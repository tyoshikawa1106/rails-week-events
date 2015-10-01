HeaderPages = (function() {
  "use strict";

  function HeaderPages() {}

  HeaderPages.openNewEventModal = function() {
    $('#new-event-modal').removeClass("slds-hide");
    $('#new-event-modal').addClass("slds-show");
  }

  HeaderPages.closeNewEventModal = function() {
    $('#new-event-modal').removeClass("slds-show");
    $('#new-event-modal').addClass("slds-hide");
  }

  HeaderPages.saveEvent = function() {
    var subject = $('#header-subject').val();
    var location = $('#header-location').val();
    var description = $('#header-description').val();

    $.ajax({
      url: "static_pages/create_event",
      type: "GET",
      data: {
        subject : subject,
        location: location,
        description: description,
      },
      dataType: "html",
      success: function(data) {
        alert("Success!");
      },
      error: function(data) {
        alert("Error!");
      }
    });

  }

  return HeaderPages;
})();