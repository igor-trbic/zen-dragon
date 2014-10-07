/*globals Backbone, alert, console, $*/
'use strict';

var AppRouter = Backbone.Router.extend({
    restfulUrl="file:///home/igortrbic/Documents/test.html",

    routes: {
        //"*actions": "defaultRoute", //matches http//example.com/#anything
        "zajednickaOsobina/:osobina": "osobinaAction", //poklapa
        "nijeZivotinja": "nijeZivotinja",
        "nema": "nemaNista"
    },

//     defaultAction:function (page) {
//         if (page){
//             var resfulPageUtl = this.restfulUrl + page + 'page';
//             this.loadRestfulData();
//         }
//     },
//     osobinaAction: function (osobina) {
//         var resfulPageUtl = this.restfulUrl + osobina + 'page';
//         this.loadRestfulData();
//     },
//     loadRestfulData: function (pageUrl) {
//         $
//     }
// });

var app_router = new AppRouter();

router.on('route:')

// Starting Backbone history is necessary step for bookmarkable URLs
Backbone.history.start();
//alert("Prelazak na sledeci script!");
