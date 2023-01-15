//Creates functionality for button-click on youtube page adding song information to set-list page, maybe add function on search button that adds song info locally, to be retrieved by the "add song" button on youtube page
var songTitleInput = document.querySelector("#song-name");
var songArtistInput = document.querySelector("#artist-name");
//var addToSetListButton = selector for add to set-list button from youtube page
//var songTitleSpan = selector for song title span in user's set-list
//var songArtistSpan = selector for song artist span in user's set-list

//addToSetListButton.addEventListener("click", function(event) {
//    event.preventDefault();

var songTitle = document.querySelector("#song-name").value;
var songArtist = document.querySelector("#artist-name").value;

//    localStorage.setItem("title", songTitle);
//    localStorage.setItem("artist", songArtist);

//    });