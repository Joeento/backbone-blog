(function() {
	var AppRouter = Backbone.Router.extend({

		routes:{
			"":"home",
		},

		initialize:function () {
		
		},

		home:function () {
			// Since the home view never changes, we instantiate it and render it only once
			if (!this.homeView) {
				this.homeView = new HomeView({el: $('#container')});
				this.homeView.render();
			}
		},


	});

	tpl.loadTemplates(['home'],
	function () {
		app = new AppRouter();
		Backbone.history.start();
	});
})();