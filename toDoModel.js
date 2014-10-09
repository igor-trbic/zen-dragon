/*globals alert, Backbone, console */
'use strict';

var ToDo = Backbone.Model.extend({

    // defaults: function () {
    //     return {order: toDoCollection.nextOrder()};
    // },

    initialize: function () {
        console.log("ToDo MODEL has been made!");
    },
    name: "NameUndeffined"
});

var toDo = new ToDo({
    element: "UndeffinedList!"
});
