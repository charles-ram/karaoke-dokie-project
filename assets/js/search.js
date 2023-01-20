//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Populates the page with info//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// adding a song to set-list ////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//variable array to store several songs locally
var setList = [];
//function to add new song to locally-stored object
function addToSetList() {
	// if there is no set-list, create one
	if (localStorage.getItem("saved setList") === null){
		var setListString = JSON.stringify(setList);
		localStorage.setItem("saved setList", setListString);
	};
	// if there is a set-list, or if one is created, parse it here
	setList = JSON.parse(localStorage.getItem("saved setList"));
	// sets maximum length of set-list to 8 songs
	if (setList.length <= 7) {
		setList.push(songInfo);
		var setListString = JSON.stringify(setList);
		localStorage.setItem("saved setList", setListString);
	// if the set-list is full, change to tooltip to reflect
	} else {
		$("#tooltip-click").text("Your Set-List is full!");
	}
};

// event listener for "Add to Set-List" button to call addToSetList function
$("#addToSetlistButton").on("click", function(event) { 
	event.preventDefault();
	addToSetList();
	tooltipFadeIn();
	tooltipFadeOut();
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Tooltip toggle hidden class///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
