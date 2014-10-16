/*globals Backbone, alert, console, $, toDo*/
/*jslint nomen: true */
'use strict';

define ([

    'jquery',
    'underscore',
    'backbone',
    'collections/toDoCollection',
    'text!templates/toDoViewTemplate.html',
    'models/toDoModel',
    'views/editView'


    ], function ($, _, Backbone, ToDoCollection, toDoViewTemplate, ToDo, EditView) {
        var ToDoView = Backbone.View.extend({

            //el: $("#todo_list_container"),

            initialize: function () {

                //this.render();
                console.log("VIEW have been made!");
            },

            render: function () {
                var template = _.template(toDoViewTemplate);
                this.$el.html(template({colMod: this.collection.models}));
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
                console.log(event);

                var toDoVar = this.$("#input_todo_list").val(),
                    toDo = new ToDo({element: toDoVar});

                this.collection.add(toDo);
                this.render();
                this.$("#input_todo_list").focus();
                console.log(this.collection.models);
                //return false; // isto kao i event.preventDefault();
            },

            delete: function (event) {
                console.log($(event.target).data('id'));
                var pom;
                _.each(this.collection.models, function (model) {
                    console.log(model);
                    if ($(event.target).data('id') === model.cid) {
                        console.log("Deleting model with cid: " + model.cid);
                        pom = model;
                    }
                });
                this.collection.remove(pom);
                console.log(this.collection.models);
                console.log("Model OBRISAN");
                this.render();
            },

            edit: function (event) {
                event.preventDefault();

                var forEditId = $(event.target).data('id'),
                    newModel = this.collection.get(forEditId);
                console.log("---------------------------");
                console.log(forEditId);
                console.log("---------------------------");
                console.log(newModel);
                console.log("---------------------------");

                window.toDoRouter.navigate('#edit', {trigger: true});
                var editView = new EditView({model: newModel}),
                    view = editView.render();
                $("#todo_list_container").html(view.el);
            }
        });

    return ToDoView;
});
