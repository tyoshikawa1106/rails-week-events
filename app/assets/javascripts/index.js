IndexPages = (function() {
  "use strict";
  
  function IndexPages() {}

  function removeActive() {
    $('#tab-all').removeClass("slds-active");
    $('#tab-sun').removeClass("slds-active");
    $('#tab-mon').removeClass("slds-active");
    $('#tab-tue').removeClass("slds-active");
    $('#tab-wed').removeClass("slds-active");
    $('#tab-thu').removeClass("slds-active");
    $('#tab-fri').removeClass("slds-active");
    $('#tab-sat').removeClass("slds-active");

    $('#content-all').removeClass("slds-show");
    $('#content-sun').removeClass("slds-show");
    $('#content-mon').removeClass("slds-show");
    $('#content-tue').removeClass("slds-show");
    $('#content-wed').removeClass("slds-show");
    $('#content-thu').removeClass("slds-show");
    $('#content-fri').removeClass("slds-show");
    $('#content-sat').removeClass("slds-show");

    $('#content-all').addClass("slds-hide");
    $('#content-sun').addClass("slds-hide");
    $('#content-mon').addClass("slds-hide");
    $('#content-tue').addClass("slds-hide");
    $('#content-wed').addClass("slds-hide");
    $('#content-thu').addClass("slds-hide");
    $('#content-fri').addClass("slds-hide");
    $('#content-sat').addClass("slds-hide");
  }

  IndexPages.clickTabAll = function() {
    removeActive();
    $('#tab-all').addClass("slds-active");
    $('#content-all').addClass("slds-show");
  }

  IndexPages.clickTabSun = function() {
    removeActive();
    $('#tab-sun').addClass("slds-active");
    $('#content-sun').addClass("slds-show");
  }

  IndexPages.clickTabMon = function() {
    removeActive();
    $('#tab-mon').addClass("slds-active");
    $('#content-mon').addClass("slds-show");
  }

  IndexPages.clickTabTue = function() {
    removeActive();
    $('#tab-tue').addClass("slds-active");
    $('#content-tue').addClass("slds-show");
  }

  IndexPages.clickTabWed = function() {
    removeActive();
    $('#tab-wed').addClass("slds-active");
    $('#content-wed').addClass("slds-show");
  }

  IndexPages.clickTabThu = function() {
    removeActive();
    $('#tab-thu').addClass("slds-active");
    $('#content-thu').addClass("slds-show");
  }

  IndexPages.clickTabFri = function() {
    removeActive();
    $('#tab-fri').addClass("slds-active");
    $('#content-fri').addClass("slds-show");
  }

  IndexPages.clickTabSat = function() {
    removeActive();
    $('#tab-sat').addClass("slds-active");
    $('#content-sat').addClass("slds-show");
  }

  return IndexPages;
})();