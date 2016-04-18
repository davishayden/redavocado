if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Template.navHeader.events({
  'click .navbar-brand': function() {
    Router.go('/home');
  }
});
