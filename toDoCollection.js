/*globals Backbone, alert, console, $, ToDo*/
/*jslint nomen: true */
'use strict';

var ToDoCollection = Backbone.Collection.extend({

    model: ToDo,

    initialize: function () {
        console.log("COLLECTION has been made!");
    }
});
var toDoCollection = new ToDoCollection();
