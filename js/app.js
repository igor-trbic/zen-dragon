define([

    'jquery',
    'underscore',
    'backbone',
    'toDoRoutes'

    ], function($, _, Backbone, ToDoRouter) {
        var initialize = function () {
            ToDoRouter.initialize();
        }

        return {
            initialize: initialize
        };
});
