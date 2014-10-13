/*globals alert, Backbone, console */
'use strict';

var ToDo = Backbone.Model.extend({

    initialize: function () {
        console.log("ToDo MODEL has been made!");
    },
    defaults: {
        "element": "UndeffinedTODO"
    }
});

var toDo = new ToDo();
