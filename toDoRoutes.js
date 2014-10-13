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
            var toDoView = new ToDoView({model: toDo}),
                view  = toDoView.render();
            $("#todo_list_container").html(view.el);
            //view.el("#todo_list_container");
            console.log(view.el);
            console.log("OLD View rendered!");
        },
        edit: function () {
            var editView = new EditView({model: forEdit}),
                view = editView.render();
            $("#todo_list_container").html(view.el);
        }
    });

var toDoRouter = new ToDoRouter();
Backbone.history.start();
