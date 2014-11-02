(function() {
	var AppRouter = Backbone.Router.extend({

		routes: {
			"":"home",
			"post/:id":"post",
			"tag/:tag":"tag",
		},

		initialize: function () {
		
		},

		home: function() {
			this.homeView = new HomeView({el: $('#container')});
		},
		post: function(id) {
			this.postView = new PostView({el: $('#container'), id: id});
		},
		tag: function(tag) {
			this.tagView = new TagView({el: $('#container'), tag: tag});
		},

	});

	
	app = new AppRouter();
	Backbone.history.start();
	

	MyApp = new Backbone.Marionette.Application();
	MyApp.addRegions({
	  mainRegion: "#content"
	});
})();