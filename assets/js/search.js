// pulls youtube string from local storage
var youtubeString = localStorage["youtubeString"];
// uses the string to create the embed link
var link = "https://www.youtube.com/embed/" + youtubeString;
// changes the video's src attribute to the embeded link
$("#vid").attr("src", link);
// pulls the song info from the local storage
var songInfo = localStorage["song info"];
// splits the song info into the Title and Artist
var songTitle = songInfo.split(" by ")[0];
var songArtist = songInfo.split(" by ")[1];
// puts those splits into their correct positions in the html
$("#song-name").text(songTitle);
$("#artist-name").text(songArtist);

//variables for js function to create object in local storage
//variable for the locally-stored song info string
var songEntry = localStorage.getItem("song info");
//variable for the newly created list items
var li = document.createElement("li");
//variable array to store several songs locally
var setList = [];

//function to add new song to locally-stored object (in progress)
function addToSetList() {
    // Render a new li for each todo
    if (songEntry !== null) {
    for (var i = 0; i <= 8; i++) {
      setList[i] = songEntry;
    };

    localStorage.setItem("setList", JSON.stringify(setList));
  };
}

//event listener for "Add to Set-List" button to call addToSetList function
addToSetlistButton.addEventListener("click", function(event) {
    event.preventDefault();
    addToSetList()
});