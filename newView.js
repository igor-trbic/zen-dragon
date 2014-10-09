/*globals Backbone, alert, console, $, toDo*/
/*jslint nomen: true */
'use strict';

var NewView = Backbone.View.extend({

    el: $("#todo_list_container"),

    initialize: function () {
        console.log("OHAYOO from new view!");
        //this.render();
    },

    render: function () {
        var template = _.template($("#new_template").html());
        this.$el.html(template);
        console.log("RENDERED!");
        return this;
    }
});
