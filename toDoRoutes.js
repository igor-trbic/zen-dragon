/*globals Backbone, alert, console, $, toDo*/
/*jslint nomen: true */
'use strict';

var ToDoRouter = Backbone.Router.extend({

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
            var toDoView = new ToDoView({model: toDo, collection: toDoCollection}),
                view  = toDoView.render();
            $("#todo_list_container").html(view.el);
            //view.el("#todo_list_container");
            console.log(view.el);
            console.log("OLD View rendered!");
        },

        edit: function () {
            console.log("You are on edit page!");
        }

});

var toDoRouter = new ToDoRouter();
Backbone.history.start();
