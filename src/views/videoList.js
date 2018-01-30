var VideoListView = Backbone.View.extend({

  initialize: function() {
    // var arr = [];
    // this.collection.forEach(function(elem) {
    //   var model = new Video(elem);
    //   var entryView = new VideoListEntryView({ model: model });
    //   arr.push(entryView.render());
    // });
    // console.log(arr);
    // this.render();
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    //this.collection.forEach(this.render, this);
    // this.collection.forEach(function(elem) {
    //   var model = new Video(elem);
    //   var entryView = new VideoListEntryView({ model: model });
    //   this.$el.html(entryView.render());
    // });
    this.collection.forEach(this.renderVideo, this);
    return this;
  },

  renderVideo: function(video) {
    //var model = new Video(elem);
    var entryView = new VideoListEntryView({model: video});
    this.$el.find('.video-list').append(entryView.render());
  },

  template: templateURL('src/templates/videoList.html')

});


// render: function() {
//     this.$el.empty();
//     this.collection.forEach(this.renderMovie, this);
//   },

//   renderMovie: function(movie) {
//     var movieView = new MovieView({model: movie});
//     this.$el.append(movieView.render());
//   }
