(function() {
	var AppRouter = Backbone.Router.extend({

		routes: {
			"":"home",
			"post/:id":"post",
		},

		initialize: function () {
		
		},

		home: function() {
			this.homeView = new HomeView({el: $('#container')});
		},
		post: function(id) {
			this.postView = new PostView({el: $('#container'), id: id});
		},

	});

	tpl.loadTemplates(['home','post'],
	function () {
		app = new AppRouter();
		Backbone.history.start();
	});
})();