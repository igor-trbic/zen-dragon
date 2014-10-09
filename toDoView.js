/*globals Backbone, alert, console, $, toDo*/
/*jslint nomen: true */
'use strict';

var ToDoView = Backbone.View.extend({

    el: $("#todo_list_container"),

    initialize: function () {
        this.toDoCollection = new ToDoCollection();
        this.render();
        console.log(toDo);
        console.log("VIEW have been made!");
    },

    render: function () {
        var template = _.template($("#todo_template").html());
        this.$el.html(template({colMod: this.toDoCollection.models}));
        console.log("RENDERED!");
        return this;
    },

    events: {
        //"click button[type=button]": "addToDo",
        //"keypress #input_todo_list":  "enterPressed"
        "submit form": "addToDo"
    },

    addToDo: function (event) {
        event.preventDefault();

        var toDoVar = this.$("#input_todo_list").val(),
            toDo = new ToDo({element: toDoVar});

        this.toDoCollection.add(toDo);
        this.render();
        this.$("#input_todo_list").focus();
        console.log(this.toDoCollection.models);
        //return false;
    }
});

var toDoView = new ToDoView({model: toDo});
