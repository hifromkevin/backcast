var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    // check for selected video
    // render that selection

    // 'select' from VideoListEntryView
    //$()
  },

  render: function() {
    // this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
