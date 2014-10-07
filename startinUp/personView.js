/*globals Backbone, alert, console, $, person*/
/*jslint nomen: true */
'use strict';

var PersonView = Backbone.View.extend({

    initialize: function () {
        this.render();
        $("#input_name").value("this.model.get(name)");
    },

    render: function () {

        //var variables = { search_label: "My name"};

        var template = _.template($("#person_template").html(), {});
        this.$el.html(template);
        console.log("Rendered.");
        return this;
    },

    events: {
        "click input[type=button]": "edit"
    },

    edit: function () {
        var name = $("#input_name"),
            lastName = $("#input_lastName"),
            age = $("#input_age"),
            school = $("#input_school"),
            pomString = "You forgot about: ";
        console.log($("#input_name").val());
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
        }
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
        if (!(name.val()) || !(age.val()) || !(age.val()) || !(school.val())) {
            alert(pomString + "!");
        } else {
            alert("All fields must be filled!");
        }
    }
});
var search_view = new PersonView({ el: $("#person_container"), model: person});
