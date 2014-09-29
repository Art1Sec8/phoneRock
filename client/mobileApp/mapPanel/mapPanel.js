Template.mapPanel.rendered = function() {
  var currentLocation = Geolocation.latLng() || { lat: 0, lng: 0 };
  console.log(currentLocation);
};

Template.mapPanel.helpers({
  //TODO we should define these later
  markers: null,
  selectedMarkerId: null
});

Template.mapPanel.events({

});