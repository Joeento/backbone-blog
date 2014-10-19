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
                    a.attr('href','#/post/'+data.models[i].attributes._id)
                    a.append(data.models[i].attributes.title)
                    li.append(a)
                    $('#post-listing').append(li);
                }               
                
            }
        });
    }
});

PostView = Backbone.View.extend({
    initialize: function(options){
        this.options = options
        this.render();
    },
    render: function(){
        // Compile the template using underscore
        var template = _.template(tpl.get('post'), {} );
        // Load the compiled HTML into the Backbone "el"
        this.$el.html(template);
        var post = new BlogPost({id: this.options.id});
        post.fetch({
            success: function(data) {
                $('#post-title').text(data.attributes.title);
                $('#post-date').text('Posted ' + moment(data.attributes.date).fromNow());
                $('#post-content').text(data.attributes.content);

                var tagString = '';
                for (var i=0; i<data.attributes.tags.length;i++) {
                    var a = $('<a/>');
                    a.text(data.attributes.tags[i]);
                    a.attr('href', '#/tag/' + data.attributes.tags[i]);
                    tagString += a.prop('outerHTML');
                    if (i<data.attributes.tags.length-1) {
                        tagString += ', ';
                    }
                }
                $('#post-tags').html(tagString);
            }
        })

    }
});

TagView = Backbone.View.extend({
    initialize: function(options){
        this.options = options;
        this.render();
    },
    render: function(){
        // Compile the template using underscore
        var template = _.template(tpl.get('tag'), {} );
        // Load the compiled HTML into the Backbone "el"
        this.$el.html(template);
        bpc = new BlogPostCollection({type: 'tags', value: this.options.tag});
        bpc.fetch({
            success: function(data) {

                for (var i=0;i<data.models.length;i++) {
                    var li = $('<li/>');
                    var a = $('<a/>');
                    a.attr('href','#/post/'+data.models[i].attributes._id)
                    a.append(data.models[i].attributes.title)
                    li.append(a)
                    $('#post-listing').append(li);
                }               
                
            }
        });
        
    }
});

