// creating reactivity for localStorage variables
var sliderOpenDep = new Tracker.Dependency; // slide open/close status
var mainPanelDep = new Tracker.Dependency;  // which panel to display for mainPanel

/***
 * gets the status of the slider
 * @returns {bool}
 */
var getSliderOpen = function () {
  var storageValue = localStorage.getItem("sliderPanelOpen");
  sliderOpenDep.depend();

  return !!(storageValue === "true" || storageValue === true);
};

/***
 * sets the status of the slider
 * @param isOpen {bool}
 */
var setSliderOpen = function (isOpen) {
  localStorage.setItem("sliderPanelOpen", isOpen);
  sliderOpenDep.changed();
};

/***
 * gets the name of the panel to display in the mainPanel
 * @returns {string}
 */
var getMainPanel = function () {
  mainPanelDep.depend();
  return localStorage.getItem("mainPanel");
};

/***
 * set the panel to display in the mainPanel by providing the panel name
 * @param panelName {string}
 */
var setMainPanel = function (panelName) {
  localStorage.setItem("mainPanel", panelName);
  mainPanelDep.changed();
};

Template.app.helpers ({
  sliderPanelOpen : function(){
    if (getSliderOpen() === true) {
      return "sliderPanelOpen";
    }
    return false;
  }
});

Template.header.helpers ({
  sliderActive: function () {
    if (getSliderOpen() === true) {
      return "active";
    }
    return false;
  }
});

Template.header.events({
  'click .sliderPanelBtn': function(e) {
    e.preventDefault();
    if(getSliderOpen() === true){
      setSliderOpen(false);
    } else {
      setSliderOpen(true);
    }
  }
});

Template.mainPanel.rendered = function() {
  // check to see if the mainPanel has been set in localStorage
  var mainPanel = getMainPanel();
  if (typeof mainPanel === undefined || mainPanel === null) {
    // we should the mainPanel to a default
    setMainPanel("homePanel");
  }
};

Template.mainPanel.helpers({
  mainPanel: function(templateName) {
    return templateName === getMainPanel();
  }
});

Template.classItem.events({
  'click .item': function(e) {}
});

Template.footer.helpers({
  active: function (buttonName) {
    if (buttonName === getMainPanel()) {
      return "active";
    }
    return null;
  }
});

Template.footer.events({
  'click .homeBtn': function(e) {
    e.preventDefault();
    return setMainPanel("homePanel");
  },
  'click .favoriteBtn': function(e) {
    e.preventDefault();
    return setMainPanel("favorite");
  },
  'click .mapsBtn': function(e) {
    e.preventDefault();
    return setMainPanel("mapPanel");
  },
  'click .imagesBtn': function(e) {
    e.preventDefault();
    return setMainPanel("cameraPanel");
  }
});
