/*globals Backbone, alert, console, $, toDo*/
/*jslint nomen: true */
'use strict';

var ToDoRouter = Backbone.Router.extend({
        routes: {
            "":     "home",
            "new":  "new"
        },

        new: function () {
            var newView = new NewView();
            this.newView.render();
            console.log("NEW View rendered!");
        },

        home: function () {
            this.toDoView.render();
            console.log("OLD View rendered!");
        }
    });

var toDoRouter = new ToDoRouter();
// toDoRouter.on('route:home', function() {
//     toDoView.render();
// });

// toDoRouter.on('route:new', function () {
//     newView.render();
// });

Backbone.history.start();
