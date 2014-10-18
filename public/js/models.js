BlogPost = Backbone.Model.extend({
	defaults: {
		title: '',
		date_created: new Date(),
		content: '',
	}
});