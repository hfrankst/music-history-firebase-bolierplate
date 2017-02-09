"use strict";
// This module has no knowledge of the DOM, or where the data goes after it is fetched from Firebase.
// It is only concerned with getting and setting data in the db

let $ = require('jquery'),
    firebase = require("./firebaseConfig");

// ****************************************
// DB interaction using Firebase REST API
// ****************************************

function getSongs(callback) {
	return new Promise(function(resolve, reject){
		$.ajax({
			url: "https://musichistory-5927a.firebaseio.com/songs.json"
		}).done(function(songData){
			resolve(songData);
		});
	});
}

function addSong(songFormObj) {

}
// POST - Submits data to be processed to a specified resource. Takes one parameter.

function deleteSong(songId) {

}

function getSong(songId) {

}

// GET - Requests/read data from a specified resource
// PUT - Update data to a specified resource. Takes two parameters.
function editSong(songFormObj, songId) {

}

module.exports = {
  getSongs,
  addSong,
  getSong,
  deleteSong,
  editSong
};
