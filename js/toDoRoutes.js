/*globals Backbone, alert, console, $, toDo*/
/*jslint nomen: true */
'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'views/editView',
    'views/newView',
    'views/toDoView',
    'collections/toDoCollection'

    ], function($, _, Backbone, EditView, NewView, ToDoView, ToDoCollection) {

        var toDoCollection = new ToDoCollection(),
            ToDoRouter = Backbone.Router.extend({

            routes: {
                "":     "home",
                "new":  "new",
                "edit": "edit"
            },

            new: function () {
                var newView = new NewView();
                newView.render();
                console.log("NEW View rendered!");
            },

            home: function () {
                var toDoView = new ToDoView({collection: toDoCollection}),
                    view  = toDoView.render();
                console.log($("#todo_list_container").length);
                $("#todo_list_container").html(view.el);
                //view.el("#todo_list_container");
                console.log(view.el);
                console.log("OLD View rendered!");
            },

            edit: function () {
                console.log("You are on edit page!");
            }
        });

        var initialize = function () {

            window.toDoRouter = new ToDoRouter();

            Backbone.history.start();
        }
    return {
        initialize: initialize
    };
});
