define([

    'jquery',
    'underscore',
    'backbone',
    'toDoRoutes'

    ], function($, _, Backbone, ToDoRouter) {
        var initialize = function () {
            ToDoRouter.initialize();
            console.log('asdasdasdas');
        }

        return {
            initialize: initialize
        };
});
