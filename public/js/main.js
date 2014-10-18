(function() {
	var AppRouter = Backbone.Router.extend({

		routes: {
			"":"home",
			"post/:id":"post",
		},

		initialize: function () {
		
		},

		home: function() {
			// Since the home view never changes, we instantiate it and render it only once
			if (!this.homeView) {
				this.homeView = new HomeView({el: $('#container')});
			}
		},
		post: function(id) {
			// Since the home view never changes, we instantiate it and render it only once
			if (!this.postView) {
				this.postView = new PostView({el: $('#container'), id: id});
			}
		},

	});

	tpl.loadTemplates(['home','post'],
	function () {
		app = new AppRouter();
		Backbone.history.start();
	});
})();