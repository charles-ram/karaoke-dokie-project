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
//variable array to store several songs locally
var setList = [];
//function to add new song to locally-stored object (in progress)
function addToSetList() {
	if (localStorage.getItem("saved setList") === null){
		var setListString = JSON.stringify(setList);
		localStorage.setItem("saved setList", setListString);
	};
	setList = JSON.parse(localStorage.getItem("saved setList"));
	if (setList.length <= 7) {
		setList.push(songInfo);
		var setListString = JSON.stringify(setList);
		localStorage.setItem("saved setList", setListString);
	} else {
		console.log("Too Many Songs!");
	}
};
	//event listener for "Add to Set-List" button to call addToSetList function
	addToSetlistButton.addEventListener("click", function(event) {
	event.preventDefault();
	addToSetList();
	tooltipFadeIn();
	tooltipFadeOut();
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Tooltip toggle hidden class////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to fade tooltip in
function tooltipFadeIn() {
	$("#tooltip-click").fadeIn();
}
// Function to fade tooltip out
function tooltipFadeOut() {
	setTimeout(function(){
		$("#tooltip-click").fadeOut();
	}, 2000);
}
