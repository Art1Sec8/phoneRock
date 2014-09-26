Meteor.startup(function () {
  if (Meteor.isCordova) {
    // The correct way
    //  navigator.geolocation.getCurrentPosition(success));
  }
});