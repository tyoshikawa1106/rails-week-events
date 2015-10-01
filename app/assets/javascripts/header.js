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
        HeaderPages.closeNewEventModal();
      },
      error: function(data) {
        alert("Error!");
      }
    });
  }

  return HeaderPages;
})();