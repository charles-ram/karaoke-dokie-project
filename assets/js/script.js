var videoSearch = ""

// sets the api-key when called
function loadClient() {
  gapi.client.setApiKey("AIzaSyBtiiB2wi4xGoStP5LSQJyym0dMXkHYsY4");
  return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
      .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
}

// Make sure the client is loaded before calling this method.
function execute() {
  // This is to test after 403 error
  $("li").remove();
  $("#resultList").append('<li class=""><button id="newPageLink" onclick="nextPage()">' + "test" + '</button></li>');
  $("#resultList").append('<li class=""><button id="newPageLink" onclick="nextPage()">' + "test" + '</button></li>');
  $("#resultList").append('<li class=""><button id="newPageLink" onclick="nextPage()">' + "test" + '</button></li>');
  $("#resultList").append('<li class=""><button id="newPageLink" onclick="nextPage()">' + "test" + '</button></li>');
  $("#resultList").append('<li class=""><button id="newPageLink" onclick="nextPage()">' + "test" + '</button></li>');

  // return gapi.client.youtube.search.list({
  //   "part": [
  //     "id,snippet"
  //   ],
  //   "q": videoSearch += " lyrics"
  // })
  //     .then(function(response) {
  //             // clears the list items that are there if any
  //             $("li").remove();
  //             // clears the search bar
  //             $("#default-search")[0].value = "";
  //             // for all 5 search results, creates a list item
  //             for (i = 0; i < response.result.items.length; i++) {
  //               var youtubeTitle = response.result.items[i].snippet.title;
  //               // add the css style here Charles, I can't figure it out otherwise
  //               $("#resultList").append('<li class=""><button id="newPageLink">' + youtubeTitle + '</button></li>');
  //             }
  //           },
  //           function(err) { console.error("Execute error", err); });
            
}
gapi.load("client");

// event listener on search button 
$("#sButton").click(function(e) {
  e.preventDefault();
  var searchInfo = $("#default-search")[0].value;
  console.log(searchInfo);
  videoSearch = searchInfo;
  loadClient()
    .then(function(response){
      execute();
    })
})

$(document).on("click", "newPageLink", function(e){
  console.log("nut")
})

// function nextPage() {
//   window.location.href = "index2.html"
// }