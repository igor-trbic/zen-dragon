/*globals Backbone, alert, console, $, ToDo*/
/*jslint nomen: true */
'use strict';

define ([

    'underscore',
    'backbone',
    'models/toDoModel'

    ], function (_, Backbone, ToDo) {

        var ToDoCollection = Backbone.Collection.extend({

            model: ToDo,

            initialize: function () {
                console.log("COLLECTION has been made!");
            }
        });
        var toDoCollection = new ToDoCollection();
    return ToDoCollection;
});
