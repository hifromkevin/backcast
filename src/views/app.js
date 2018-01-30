var AppView = Backbone.View.extend({
  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    // this.collection = videos;
    //this.model.on('select', this.render, this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    var vidList = new VideoListView({el: $('.list'), collection: this.videos});
    vidList.render();
    // this.videos.forEach(function(elem) {
    //   var vid = new VideoListEntryView({el: $('.video-list'), model: elem});
    //   vid.render();
    // });
    var vidPlayer = new VideoPlayerView({el: $('.player'), model: this.videos.on('select')});
    vidPlayer.render();
    // this.videos.on('select', vidPlayer.render);
    var searchBar = new SearchView({ el: $('.search'), collection: this.videos });
    searchBar.render();
    return this;
  },

  template: templateURL('src/templates/app.html')
});


// var AppView = Backbone.View.extend({

//   events: {
//     'click form input': 'handleClick'
//   },

//   handleClick: function(e) {
//     var field = $(e.target).val();
//     this.collection.sortByField(field);
//   },

//   render: function() {
//     new MoviesView({
//       el: this.$('#movies'),
//       collection: this.collection
//     }).render();
//   }

// });

// $(function(){
//         var movies = new Movies(movieData);
//         new AppView({el: $('#main'), collection: movies}).render();
//       });

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
