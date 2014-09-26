/**
 * Created by michaelghobrial on 9/23/14.
 */

var mainPanelSwitch;

mainPanelSwitch = function(newPanel) {
  return Session.set("mainPanel", newPanel);
};

Template.header.events({
  'click .sliderPanelBtn': function(e) {
    e.preventDefault();
    $(".mainPanel").toggleClass("open");
    return $(".lPanelBtn").toggleClass("active");
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
