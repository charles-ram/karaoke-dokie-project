//Creates functionality for button-click on youtube page adding song information to set-list page, maybe add function on search button that adds song info locally, to be retrieved by the "add song" button on youtube page

//selects the span in the set-list ul to generate text populated from local storage
var userSetListSongSpan = document.querySelector("#set-list-song")


//function pulls most recent song info from local storage populated by home page search, and sets the text of the li in the set-list ul to the song info string
function addToSetList() {
    var setListSong = localStorage.getItem("song info");
//checks to see if song info is available in local storage
    if (!setListSong) {
        return;

    } else {
//if song info is available, stores variable to create an h2
        var setlistHeading = document.createElement("h2");
      
//stores a variable to create an ul
        var list = document.createElement("ul");
//stores a variable to create an li
        var listItem = document.createElement("li");
//sets text of h2 to "Your Karaoke Set-List"
        setlistHeading.textContent = "Your Karaoke Set-List"
//sets the text of the li to "song info" pulled from local storage
        listItem.textContent = setListSong;

//appends h2 to section
        document.getElementById("paper-set-list").appendChild(setlistHeading);
//appends the ul to section
        document.getElementById("paper-set-list").appendChild(list);
//appends the li to the ul
        document.getElementById("paper-set-list").appendChild(listItem);
        //document.body.section.ul.appendChild(li);
        //document.body.section.ul.li.appendChild(span);
    }

}

addToSetlistButton.addEventListener("click", function(event) {
    event.preventDefault();

    addToSetList();
})

