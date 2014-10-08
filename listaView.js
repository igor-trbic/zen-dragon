/*globals Backbone, alert, console, $, lista*/
/*jslint nomen: true */
'use strict';

var ListaView = Backbone.View.extend({
    initialize: function () {
        this.render();
        console.log(lista);
    },

    render: function () {
        var template = _.template($("#list_template").html());
        this.$el.html(template);
        console.log("RENDERED!");
        return this;
    },

    events: {
        "click input[type=button]": "addToDo"
    },

    addToDo: function () {
        console.log("TODO PRE:");
        console.log(lista);

        var toDo = this.$("#input_to_list");
        console.log(toDo.length);
        this.model.set({
            element: toDo.val()
        });
        console.log("TODO POSLE:");
        console.log(this.model);
    }
});

var listaView = new ListaView({el: $("#list_container"), model: lista});
