var Videos = Backbone.Collection.extend({

  model: Video,

  initialize: function() {
    // your code here
    this.on('select', () => {
      this.sort();
    });
  },

});

// var Movies = Backbone.Collection.extend({

//   model: Movie,

//   initialize: function() {
//     // your code here
//     this.on('change', () => {
//       this.sort();
//     });
//   },

//   comparator: 'title',

//   sortByField: function(field) {
//     // your code here
//     this.comparator = field;
//     this.sort();
//   }

// });



// });