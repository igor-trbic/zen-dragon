/*globals Backbone, alert, console, $, toDo*/
/*jslint nomen: true */
'use strict';
define ([

    'jquery',
    'underscore',
    'backbone',
    'text!../templates/editViewTemplate.html'

    ], function ($, _, Backbone, editViewTemplate) {

        var EditView = Backbone.View.extend({

            // initialize: function () {
            // },

            render: function () {
                console.log("+++++++++++++++++++++++++++++++");
                console.log(this.model);
                console.log("+++++++++++++++++++++++++++++++");
                var data = {},
                    template = _.template(editViewTemplate, data);
                this.$el.html(template({edit: this.model.get('element')}));
                console.log("RENDERED!");
                console.log($("#edit_todo"));
                this.$("#edit_todo").focus();
                return this;
            },

            events: {
                "submit form": "editing"
            },

            editing: function (event) {
                event.preventDefault();
                this.$("#edit_todo").focus();
                var changeText = this.$("#edit_todo").val();
                console.log("*******************************");
                console.log(changeText);
                console.log("*******************************");
                this.model.set({element: changeText});
                console.log("NEW MODEL VALUE:", this.model.get('element'));
                console.log("EDIT CLICKED!");
                toDoRouter.navigate('', {trigger: true});
            }

        });
    return editViewTemplate;
});
