Views = new Meteor.Collection('Views');

Meteor.methods({
  'logView': function(number){
    Views.insert({
      pageNumber: number,
      createdAt: new Date()
    });
  }
});
