// sets the api-key when called
function loadClient() {
  gapi.client.setApiKey("AIzaSyBtiiB2wi4xGoStP5LSQJyym0dMXkHYsY4");
  return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
      .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
}

// Make sure the client is loaded before calling this method.
function execute() {
  return gapi.client.youtube.search.list({
    "part": [
      "id,snippet"
    ],
    "q": "Diablo mac miller"
  })
      .then(function(response) {
              // Handle the results here (response.result has the parsed body).
              console.log("Response", response);
              console.log(response.result.items[0].id.videoId);
            },
            function(err) { console.error("Execute error", err); });
}
gapi.load("client");