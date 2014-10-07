/*globals Backbone, alert, console, $*/
'use strict';

var Song = Backbone.Model.extend({
    defaults: {
        name: "Song name here",
        artist: "Artist name here"
    },
    initialize: function () {
        console.log("Model created!");
    }
});

var Album = Backbone.Collection.extend({
    Model: Song
});

var song1 = new Song({ name: "All of me", artist: "JOhn Legend"});
var song2 = new Song({ name: "Die for metal", artist: "Manowar"});
var song3 = new Song({ name: "Mystica", artist: "Axel Rudi Pell"});

var myAlbum = new Album([song1, song2, song3]);
console.log(myAlbum.models);
