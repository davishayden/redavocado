Router.route('/home', function() {
  this.render('home');
});

Router.route('/post/:_id', function () {
  //var item = Items.findOne({_id: this.params._id});
  var item = this.params._id;
  console.log(item);
  if(item == "1") {
    this.render('gvsuTwitter');
  }
});


Router.route('/(.*)', function() {this.redirect('/home');});
