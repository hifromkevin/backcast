var VideoPlayerView = Backbone.View.extend({
  //model: 
  initialize: function() {
    // check for selected video
    // render that selection
    //this.collection.on('select', this.selectVideo, this);
    // 'select' from VideoListEntryView
    //$()
  
    // this.render();

    this.collection.on('select', this.selectVideo, this);
    //this.render();
  },

  selectVideo: function(video) {
    this.model = video;
    this.render();
  },

  render: function(video) {
    // this.$el.html('<div class="loading">Please wait...</div>');
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
      // this.$el.find('.video-player').append(video.render());
      // console.log(video);
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    // this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
