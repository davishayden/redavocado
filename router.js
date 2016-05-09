Router.route('/home', function() {
  this.render('home');
  Meteor.call("logView", 0);
});

Router.route('/post/:_id', function () {
  //var item = Items.findOne({_id: this.params._id});
  var item = this.params._id;
  if(item == "1") {
    this.render('gvsuTwitter');
    Meteor.call("logView", 1);

  } else if(item == "2") {
    this.render('gentexStudy');
    Meteor.call("logView", 2);

  } else if(item == "3") {
    this.render('venmoStudyMain')
    Meteor.call("logView", 3);

  }
});


Router.route('/(.*)', function() {this.redirect('/home');});
