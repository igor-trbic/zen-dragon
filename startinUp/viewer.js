/*globals Backbone, alert, console, $*/
'use strict';

var SearchView = Backbone.View.extend({
    initialize: function () {
        console.log("Rendering in 3, 2, 1.....");
        this.render();
    },
    render: function () {
        // Compile the template using underscore
        console.log("Rendering!");
        console.log($("#search_template").html());

        var variables = { search_label: "My search"};

        var template = _.template($("#search_template").html(), variables);
        // Load the completed HTML into the Backbone el
        this.$el.html(template);
        //console.log(template);
        console.log("Rendered.");
        //console.log(this);
        return this;
    },
    events: {
        "click input[type=button]": "doSearch"
    },
    doSearch: function (event) {
        //Button clicked, accessing element -> event.currentTarget
        if ($("#search_input").val() === '') {
            console.log("Usao sam u if");
            alert("You must enter something!");
        } else {
            alert("Search for " + $("#search_input").val());
            console.log("Usao sam u else");
        }
    }
});
var search_view = new SearchView({ el: $("#search_container")});
