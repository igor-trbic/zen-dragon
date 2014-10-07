/*globals Backbone, alert, console, $, document*/
'use strict';

var AppRouter = Backbone.Router.extend({
    routes: {
        '': 'home',
        'view/:id': 'view',
        'category/:name/:p:page': 'showCategory'
    },
    home: function () {
        alert("You are viewing HOME PAGE");
    },
    view: function (id) {
        alert("You are viewing IMAGE of id: " + id);
    },
    showCategory: function (name, page) {
        alert();
    }
});

var appRouter = new AppRouter();
appRouter.listenTo("change:home", function () {
    console.log("Dolazak na HOME!");
});

// appRouter.on('route:home', function () {
//     console.log("I'm home!");
// });
//
// appRouter.on('router:viewImage', function () {
//     console.log("Im imaging!");
// });

Backbone.history.start();
