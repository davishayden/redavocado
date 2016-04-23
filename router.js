Router.route('/home', function() {
  this.render('home');
});

Router.route('/post/:_id', function () {
  //var item = Items.findOne({_id: this.params._id});
  var item = this.params._id;
  if(item == "1") {
    this.render('gvsuTwitter');
  } else if(item == "2") {
    this.render('gentexStudy');
  } else if(item == "3") {
    this.render('venmoStudyMain')
  }
});


Router.route('/(.*)', function() {this.redirect('/home');});
