/*globals Backbone, alert, console, $, toDo*/
/*jslint nomen: true */
'use strict';

define ([

    'jquery',
    'underscore',
    'backbone',
    'collections/toDoCollection',
    'text!../templates/toDoViewTemplate.html'

    ], function ($, _, Backbone, ToDoCollection, toDoViewTemplate) {
        var ToDoView = Backbone.View.extend({

            //el: $("#todo_list_container"),

            initialize: function () {

                //this.render();
                console.log(toDo);
                console.log("VIEW have been made!");
            },

            render: function () {
                var data = {},
                    template = _.template(toDoViewTemplate, data);
                this.$el.html(template({colMod: toDoCollection.models}));
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

                toDoCollection.add(toDo);
                this.render();
                this.$("#input_todo_list").focus();
                console.log(toDoCollection.models);
                //return false; // isto kao i event.preventDefault();
            },

            delete: function (event) {
                console.log($(event.target).data('id'));
                var pom;
                _.each(toDoCollection.models, function (model) {
                    console.log(model);
                    if ($(event.target).data('id') === model.cid) {
                        console.log("Deleting model with cid: " + model.cid);
                        pom = model;
                    }
                });
                toDoCollection.remove(pom);
                console.log(toDoCollection.models);
                console.log("Model OBRISAN");
                this.render();
            },

            edit: function (event) {
                event.preventDefault();

                var forEditId = $(event.target).data('id'),
                    newModel = toDoCollection.get(forEditId);
                console.log("---------------------------");
                console.log(forEditId);
                console.log("---------------------------");
                console.log(newModel);
                console.log("---------------------------");

                toDoRouter.navigate('#edit', {trigger: true});
                var editView = new EditView({model: newModel}),
                    view = editView.render();
                $("#todo_list_container").html(view.el);
            }
        });

    return toDoViewTemplate;
});
