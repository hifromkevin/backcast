var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
  //     // your code here

    this.model.on('select', this.render, this);
    // console.log(this.model);
    // this.render();
  },

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  handleClick: function() {
    this.model.select();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});

// var MovieView = Backbone.View.extend({
//   //model: Movie,
//   template: _.template('<div class="movie"> \
//                           <div class="like"> \
//                             <button><img src="images/<%- like ? \'up\' : \'down\' %>.jpg"></button> \
//                           </div> \
//                           <span class="title"><%- title %></span> \
//                           <span class="year">(<%- year %>)</span> \
//                           <div class="rating">Fan rating: <%- rating %> of 10</div> \
//                         </div>'),

//   initialize: function() {
//     // your code here

//     this.model.on('change', this.render, this);
//     // console.log(this.model);
//     // this.render();
//   },

//   events: {
//     'click button': 'handleClick'
//   },

//   handleClick: function() {
//     this.model.toggleLike();
//   },

//   render: function() {
//     this.$el.html(this.template(this.model.attributes));
//     return this.$el;
//   }

// });