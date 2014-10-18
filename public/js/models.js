BlogPost = Backbone.Model.extend({
	urlRoot: '/api/posts',
	defaults: {
		title: '',
		date_created: new Date(),
		content: '',
	}
});