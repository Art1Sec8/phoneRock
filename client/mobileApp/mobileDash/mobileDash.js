/**
 * Created by michaelghobrial on 9/23/14.
 */

var mainPanelSwitch;

mainPanelSwitch = function(newPanel) {
  return Session.set("mainPanel", newPanel);
};

Template.app.helpers ({
  leftPanelOpen : function(){
    if (Session.get("leftPanelOpen")) {
      return "leftPanelOpen";
    } else {
      return false;
    }
  }
})

Template.header.events({
  'click .sliderPanelBtn': function(e) {
    e.preventDefault();
    // $(".mainPanel").toggleClass("open");
    if(Session.get("leftPanelOpen")){
      Session.set("leftPanelOpen",false);
      return $(".lPanelBtn").toggleClass("active");  
    } else {
      Session.set("leftPanelOpen",true);
      return $(".lPanelBtn").toggleClass("active");  
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
