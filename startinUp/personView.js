/*globals Backbone, alert, console, $, person*/
/*jslint nomen: true */
'use strict';

var PersonView = Backbone.View.extend({

    initialize: function () {
        this.render();
    },

    render: function () {

        //var variables = { search_label: "My name"};
        var a = new Date(),
            template = _.template($("#person_template").html());
        this.$el.html(template({date: a}));
        return this;
    },

    events: {
        "click input[type=button]": "edit",
        "click input[type=text]" : "clear"
    },
    clear: function (event) {
        console.log(event.target);
        $(event.target).val();
        console.log($(event.target).val());
        console.log("CLICKED!");
        console.log(person);
    },
    edit: function () {
        var name = $("#input_name"),
            lastName = $("#input_lastName"),
            age = $("#input_age"),
            school = $("#input_school"),
            pomString = "You forgot about: ";
        if (name.val()
                && lastName.val()
                && age.val()
                && school.val()) {
            this.model.set({name: name.val(),
                            lastName: lastName.val(),
                            age: age.val(),
                            education: school.val()});
            console.log(person);
            console.log("Osoba uspesno unesena!");
        } else if ((name.val() || age.val() || age.val() || school.val())) {
            if (!(name.val())) {
                pomString += "Name ";
            }
            if (!(lastName.val())) {
                pomString += "Last Name ";
            }
            if (!(age.val())) {
                pomString += "Age ";
            }
            if (!(school.val())) {
                pomString += "School ";
            }
            alert(pomString + "!");
        } else {
            alert("All fields must be filled!");
        }
    }
});
var search_view = new PersonView({ el: $("#person_container"), model: person});
