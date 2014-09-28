// creating reactivity for localStorage variable
var sliderOpenDep = new Tracker.Dependency;

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
  localStorage.setItem(("sliderPanelOpen"), isOpen);
  sliderOpenDep.changed();
};


var mainPanelSwitch;

mainPanelSwitch = function(newPanel) {
  return Session.set("mainPanel", newPanel);
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
  return Session.set("mainPanel", "listClasses");
};

Template.mainPanel.helpers({
  mainPanel: function(templateName) {
    return templateName === Session.get("mainPanel");
  }
});

Template.classItem.events({
  'click .item': function(e) {}
});

Template.footer.events({
  'click .homeBtn': function(e) {
    e.preventDefault();
    return mainPanelSwitch("listClasses");
  },
  'click .profileBtn': function(e) {
    e.preventDefault();
    return mainPanelSwitch("profile");
  },
  'click .favoriteBtn': function(e) {
    e.preventDefault();
    return mainPanelSwitch("favorite");
  }
});
