//bootstrap

require.config({
    baseUrl:  'js',

    paths: {
        jquery: 'libs/jquery/jquery',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/backbone',
        templates: '../templates'
    }
});

require([
    'app',
    ], function(App){ //ceka da ucita sve sto je u app.js

        App.initialize();
});
