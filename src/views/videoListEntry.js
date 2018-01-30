var VideoListEntryView = Backbone.View.extend({
  initialize: function() {
  //     // your code here

    // this.model.on('select', this.render, this);
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
    return this.$el;
  },
  // template: _.template('<div class="video-list-entry media"> \
  //                     <div class="media-left"> \
  //                       <img class="media-object" src="<%- snippet.thumbnails.default.url %>" /> \
  //                     </div> \
  //                     <div class="media-body"> \
  //                       <div class="video-list-entry-title"><%- snippet.title %></div> \
  //                       <div class="video-list-entry-detail"><%- snippet.description %></div> \
  //                     </div> \
  //                   </div> \
  //                   '),

  template: templateURL('src/templates/videoListEntry.html')

});


