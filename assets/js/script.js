//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Necessary Youtube API functions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// sets the api-key when called
function loadClient() {
  gapi.client.setApiKey("AIzaSyBtiiB2wi4xGoStP5LSQJyym0dMXkHYsY4");
  return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
      .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
}

// necessary youtube functions
// Make sure the client is loaded before calling this method.
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
  $("#resultList").append('<li class="flex items-center justify-center"><img class="px-8 py-2 w-1/6" src="./assets/images/Ajax_loader_metal_512.gif"></li>')
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
      "X-RapidAPI-Key": "a4a48f36c2msh7ff5bd3d41db982p1e4bf2jsnde8ccd053f94",
      "X-RapidAPI-Host": "shazam.p.rapidapi.com"
    }
  };

  // returns the song title, the artist, and the snippit to a list item
  $.ajax(settings).done(function (response) {
    // removes the loading icon
    $("li").remove();
    // for each search result, return the song, its artist, and a snippet of the lyrics if theyre avaliable
    for (i = 0; i < response.tracks.hits.length; i++) {
      var songTitle = response.tracks.hits[i].track.title;
      var artist = response.tracks.hits[i].track.subtitle;
      // var songSnip = response.tracks.hits[i].snippet;
      // // sets dialog to appear if no snippet of song lyrics are present
      // if (songSnip === undefined) {
      //   songSnip = "<i>Lyrics currently unavailable</i>"
      // };
      // Charles add the class's here for the css framework
      // I'm aware of how ugly this is, but I cannot get it to work otherwise
      $("#resultList").append('<li id="newPageLink" class="block list-none"><button id="buttonCheck" class="m-3 text-white hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-zinc-700 font-medium rounded-lg text-sm px-4 py-2 dark:bg-zinc-700 dark:hover:bg-zinc-700 dark:focus:ring-zinc-700"><h2>' + songTitle + ' by ' + artist + '</h2></button></li>');
    };
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// clicking on a reponse after the search strings everything together
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// sets the function argument to the content of the button, runs youtube search API
$("#resultList").on("click", "#buttonCheck", function(event){
  var x = event.target.textContent;
  localStorage.setItem("song info", x);
  loadClient()
    .then(function(response){
      execute(x)
        .then(function(response){
        window.location.href = "./search.html";
      })
    });
});


