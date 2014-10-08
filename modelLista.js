/*globals alert, Backbone, console */
'use strict';

var Lista = Backbone.Model.extend({
    initialize: function () {
        console.log("List has been made!");
    }
});

var lista = new Lista({
    element: "UndeffinedList!"
});
