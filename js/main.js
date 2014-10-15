//bootstrap

require.config({
    baseUrl:  'js',

    paths: {
        jquery: 'libs/jquery/jquery',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/backbone',
        app: 'app'
    }
});

require([
    'app',
    ], function(App){
        App.initialize();
});
