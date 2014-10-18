HomeView = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        // Compile the template using underscore
        var template = _.template(tpl.get('home'), {} );
        // Load the compiled HTML into the Backbone "el"
        this.$el.html(template);
        bpc = new BlogPostCollection();
        bpc.fetch({
            success: function(data) {
                for (var i=0;i<data.models.length;i++) {
                    var li = $('<li/>');
                    li.append(data.models[i].attributes.title)
                    $('#post-listing').append(li);
                }
                
                
            }
        });
    }
});