//Creates functionality for button-click on youtube page adding song information to set-list page, maybe add function on search button that adds song info locally, to be retrieved by the "add song" button on youtube page

//selects the span in the set-list ul to generate text populated from local storage
var userSetListSongSpan = document.querySelector("#set-list-song")


//function pulls most recent song info from local storage populated by home page search, and sets the text of the li in the set-list ul to the song info string
function addToSetList() {
    var setListSong = localStorage.getItem("song info");

    if (!setListSong) {
        return;
    }

    userSetListSongSpan.textContent = setListSong;
}

addToSetlistButton.addEventListener("click", function(event) {
    event.preventDefault();

    addToSetList();
})

