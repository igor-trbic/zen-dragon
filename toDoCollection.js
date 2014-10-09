/*globals Backbone, alert, console, $, ToDo*/
/*jslint nomen: true */
'use strict';

var ToDoCollection = Backbone.Collection.extend({

    model: ToDo,

    initialize: function (models, options) {
        console.log("COLLECTION has been made!");
    }

    // nextOrder: function () {
    //     if (!this.lenght) {
    //         return 1;
    //     }
    //     return this.last().get('order') + 1;
    // },
    //
    // comparator: 'order'

});

//var toDoCollection = new ToDoCollection();

// var toDo1 = new ToDo({
//     element: "Have lunch!"
// });
//
// var toDo2 = new ToDo({
//     element: "Rest!"
// });

// toDoCollection.push(toDo);
// console.log(toDoCollection.models);
