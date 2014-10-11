(function() {
   
    SearchView = Backbone.View.extend({
        initialize: function(){
            this.render();
        },
        render: function(){
            // Compile the template using underscore
            var template = _.template( tpl.get('home'), {} );
            // Load the compiled HTML into the Backbone "el"
            this.$el.html( template );
        }
    });
})();