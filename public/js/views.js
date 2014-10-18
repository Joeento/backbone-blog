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
                    var a = $('<a/>');
                    a.attr('href','#/post/'+data.models[i].attributes.id)
                    a.append(data.models[i].attributes.title)
                    li.append(a)
                    $('#post-listing').append(li);
                }               
                
            }
        });
    }
});

PostView = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        // Compile the template using underscore
        var template = _.template(tpl.get('post'), {} );
        // Load the compiled HTML into the Backbone "el"
        this.$el.html(template);
        alert("post will load here");
    }
});