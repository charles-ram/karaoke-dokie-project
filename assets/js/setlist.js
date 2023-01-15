//Creates functionality for button-click on youtube page adding song information to set-list page, maybe add function on search button that adds song info locally, to be retrieved by the "add song" button on youtube page
//var songTitleInput = document.querySelector("#song-name");
//var songArtistInput = document.querySelector("#artist-name");
//var addToSetListButton = selector for add to set-list button from youtube page
var userSetListSongSpan = document.querySelector("#set-list-song")
//var songArtistSpan = selector for song artist span in user's set-list

//function pulls song info from local storage populated by home page search, and sets the text of the li in the set-list ul to the song info string
addToSetList();

function addToSetList() {
    var setListSong = localStorage.getItem("song info");

    if (!setListSong) {
        return;
    }

    userSetListSongSpan.textContent = setListSong;
}
//addToSetListButton.addEventListener("click", function(event) {
//    event.preventDefault();

//var songTitle = document.querySelector("#song-name").value;
//var songArtist = document.querySelector("#artist-name").value;

//    localStorage.setItem("title", songTitle);
//    localStorage.setItem("artist", songArtist);

//    });