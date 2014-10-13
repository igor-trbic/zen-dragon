/*globals Backbone, alert, console, $, toDo*/
/*jslint nomen: true */
'use strict';

var ToDoView = Backbone.View.extend({

    //el: $("#todo_list_container"),

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
        "submit form": "addToDo",
        "click #delete_button": "delete",
        "click #edit_button": "edit"
    },

    addToDo: function (event) {
        event.preventDefault();

        var toDoVar = this.$("#input_todo_list").val(),
            toDo = new ToDo({element: toDoVar});

        this.toDoCollection.add(toDo);
        this.render();
        this.$("#input_todo_list").focus();
        console.log(this.toDoCollection.models);
        //return false; // isto kao i event.preventDefault();
    },

    delete: function (event) {
        console.log($(event.target).data('id'));
        var pom;
        _.each(this.toDoCollection.models, function (model) {
            console.log(model);
            if ($(event.target).data('id') === model.cid) {
                console.log("Deleting model with cid: " + model.cid);
                pom = model;
            }
        });
        this.toDoCollection.remove(pom);
        console.log(this.toDoCollection.models);
        console.log("Model OBRISAN");
        this.render();
    },

    edit: function (event) {

        var forEdit;
        //var pom = this;
        console.log("1", this);
        // _.each(this.toDoCollection.models, function (model) {
        //     console.log(model);
        //     if ($(event.target).data('id') === model.cid) {
        //         console.log("Deleting model with cid: " + model.cid);
        //         //pom.forEdit = model;
        //         forEdit = model;
        //         console.log("2", this);
        //     }
        // });
        //m - m.find
        //new view(model)

        console.log("---------------------------");
        console.log(forEdit);
        console.log("---------------------------");


        toDoRouter.navigate('#edit', {trigger: true});
        return forEdit;
    }
});
