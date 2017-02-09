"use strict";

let $ = require('jquery'),
    db = require("./db-interaction"),
    templates = require("./dom-builder");
    // login = require("./user");


// Using the REST API
function loadSongsToDOM() {
  console.log("Need to load some songs, Buddy");
  db.getSongs()
  .then(function(songData){
    console.log("got data", songData);
    var idArray = Object.keys(songData);
    idArray.forEach(function(key){
      songData[key].id = key;
    });
    console.log("song object with id", songData);
    templates.makeSongList(songData);
  });
}
loadSongsToDOM(); //<--Move to auth section after adding login btn

// Send newSong data to db then reload DOM with updated song data
$(document).on("click", ".save_new_btn", function() {
  console.log("click save new song");
  let songObj = buildSongObj();
  db.addSong(songObj)
  .then(function(songId){
    loadSongsToDOM();
  });
});

// go get the song from database and then populate the form for editing.
$(document).on("click", ".edit-btn", function () {
  console.log("click edit button");
  let songID = $(this).data("edit-id");
  db.getSong(songId)
  .then(function (song) {
    return templates.songForm(song, songID);
  })
  .then(function(finishedForm){
    $(".uiContainer--wrapper").html(finishedForm);
  });
});

//Save edited song to FB then reload DOM with updated song data
$(document).on("click", ".save_edit_btn", function() {

});

// Remove song then reload the DOM w/out new song
$(document).on("click", ".delete-btn", function () {
  console.log("click delete song", $(this).data("delete-id"));
  let songID = $(this).data("delete-id");
  db.deleteSong(songId)
  .then(function () {
    loadSongsToDOM();
  });

});


// Helper functions for forms stuff. Nothing related to Firebase
// Build a song obj from form data.
function buildSongObj() {
    let songObj = {
    title: $("#form--title").val(),
    artist: $("#form--artist").val(),
    album: $("#form--album").val(),
    year: $("#form--year").val()
  };
  return songObj;
}

// Load the new song form
$("#add-song").click(function() {
  console.log("clicked add song");
  var songForm = templates.songForm()
  .then(function(songForm) {
    $(".uiContainer--wrapper").html(songForm);
  });
});
