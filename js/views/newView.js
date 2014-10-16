/*globals Backbone, alert, console, $, toDo*/
/*jslint nomen: true */
'use strict';

define ([

    'jquery',
    'underscore',
    'backbone',
    'text!templates/newViewTemplate.html'

    ], function ($, _, Backbone, newViewTemplate) {

    var NewView = Backbone.View.extend({

        el: $("#todo_list_container"),

        initialize: function () {
            console.log("OHAYOO from new view!");
            //this.render();
        },

        render: function () {
            var data  = {},
                template = _.template(newViewTemplate, data);
            this.$el.html(template);
            console.log("RENDERED!");
            return this;
        }
    });

    return NewView;
});
