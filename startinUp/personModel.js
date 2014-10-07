/*globals alert, Backbone, console */
'use strict';

var Person = Backbone.Model.extend({
    initialize: function () {
        console.log("Person has been made!");
    }
});

var person = new Person({
    name: "UndeffinedName",
    lastName: "UndeffinedLastName",
    age: "UndeffinedAge",
    education: "UndeffinedSchool"
});

console.log(person);
