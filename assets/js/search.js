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