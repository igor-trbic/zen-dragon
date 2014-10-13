/*globals Backbone, alert, console, $, toDo*/
/*jslint nomen: true */
'use strict';

var EditView = Backbone.View.extend({


    render: function () {
        console.log("+++++++++++++++++++++++++++++++");
        console.log(forEdit);
        console.log("+++++++++++++++++++++++++++++++");
        var editModel = forEdit.val(),
            template = _.template($("#edit_template").html());
        this.$el.html(template({edit: editModel}));
        console.log("RENDERED!");
        return this;
    },

    events: {
        "submit form": "editing"
    },

    editing: function () {
        event.preventDefault();
        console.log("EDIT CLICKED!");
    }

});
