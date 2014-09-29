Router.map(function () {
  this.route('home', {
    path: '/',
    onBeforeAction: function () {
      // let's make sure we bypass the front page and go to the mobile app
      if (Meteor.isCordova) {
        this.redirect('/app');
      }
    }
  }),

  this.route('mobileApp', {
    path: '/app'
  });
});