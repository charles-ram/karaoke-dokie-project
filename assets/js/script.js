//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Necessary Youtube API functions ///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// necessary youtube functions

// sets the api-key when called
function loadClient() {
	gapi.client.setApiKey("AIzaSyDdJlTY2zZWfHrPj2Aype7LzVUnvKmykT0");
	return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
		.then(function() { console.log("GAPI client loaded for API"); },
			function(err) { console.error("Error loading GAPI client for API", err); });
}

// Searches youtube and responds with a list of search results
function execute(x) {
	return gapi.client.youtube.search.list({
		"part": [
		"id"
		],
		"q": x += " lyrics"
  })
	  .then(function(response) {
				// fetches the video string
				videoString = response.result.items[0].id.videoId;
				// stores the video string to the local storage to be accessed on the search Page
				localStorage.setItem("youtubeString", videoString);
			  },
			function(err) { console.error("Execute error", err); });

}
gapi.load("client");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Shazam Search and information return //////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// event listener on search button
$("#sButton").click(function(e) {
	e.preventDefault();
	// pulls the value from the search bar
	var searchInfo = $("#default-search")[0].value;
	// clears the search bar
	$("#default-search")[0].value = "";
	// removes all previous search results
	$("li").remove();
	// appends the loading icon
	$("#resultList").append('<li class="flex items-center justify-center"><img class="w-36 h-36 p-4" src="./assets/images/LoadingIcon.gif"></li>')
	// split the search text, and adds %20 where the spaces are,
	var searchInfoCon = searchInfo.split(" ").join("%20");
	// this is the shazam search url concatanated
	var shazamUrl = "https://shazam.p.rapidapi.com/search?term=" + searchInfoCon + "&locale=en-US&offset=0&limit=5";

	// sets the settings for the shazam search
	const settings = {
	"async": true,
	"crossDomain": true,
	"url": shazamUrl,
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "654f2c0fddmsh3a2ffb1545d6690p1048aejsn5de087a4549a",
		"X-RapidAPI-Host": "shazam.p.rapidapi.com"
	}
};

	// returns the song title, the artist, and the snippit to a list item
	$.ajax(settings).done(function (response) {
	// removes the loading icon
	$("li").remove();
	// checks to see if the response is an empty object
		if (response && Object.keys(response).length === 0) {
			// if it is an empty object, return a response for no results
			$("#resultList").append('<li><h2><i>No Results could be found, try different lyrics</i></h2></li>');
		// if it is not empty, run a for loop
		} else {
		// for each search result, return the song, its artist, and a snippet of the lyrics if theyre avaliable
			for (i = 0; i < response.tracks.hits.length; i++) {
				var songTitle = response.tracks.hits[i].track.title;
				var artist = response.tracks.hits[i].track.subtitle;
				// Shazam API has a lyric snippet, however, it ended up causing issues, and 3/4 of the time returned nothing, so its been commented out for now
					// var songSnip = response.tracks.hits[i].snippet;
					//sets dialog to appear if no snippet of song lyrics are present
						// if (songSnip === undefined) {
						//   songSnip = "<i>Lyrics currently unavailable</i>"
					// };
				// I'm aware of how ugly this is, but I cannot get it to work otherwise
				$("#resultList").append('<li id="newPageLink" class="block list-none"><button id="buttonCheck" class="m-3 text-white hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-zinc-700 font-medium rounded-lg text-sm px-4 py-2 dark:bg-zinc-700 dark:hover:bg-zinc-700 dark:focus:ring-zinc-700"><h2>' + songTitle + ' by ' + artist + '</h2></button></li>');
			};
		};
	});
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// clicking on a reponse after the search strings everything together ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// sets the function argument to the content of the button, runs youtube search API
$("#resultList").on("click", "#buttonCheck", function(event){
	// sets a variable with the text content of the button, which is the song info
	var x = event.target.textContent;
	// store the text content to the song info
	localStorage.setItem("song info", x);
	// youtube functions
	loadClient()
	// wait on loadClient
	.then(function(response){
		// runs the youtube function to search with "x" which is the song info
		execute(x)
		// wait on the youtube search, and then move to the search result page
		.then(function(response){
		window.location.href = "./search.html";
		})
	});
});
