Meteor.startup(function () {
  if (Meteor.isCordova) {

  }
  console.log(Geolocation.currentLocation());
});