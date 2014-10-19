BlogPostCollection = Backbone.Collection.extend({
	model:BlogPost,
	initialize: function(options) {
		console.log(options);
		options = options || {}
		console.log(options);
		this.type = options.type || 'posts'
		this.value = options.value || '' 
	},
	url: function() {
		return '/api/' + this.type + '/' + this.value
	}
});