//Creates functionality for button-click on youtube page adding song information to set-list page, maybe add function on search button that adds song info locally, to be retrieved by the "add song" button on youtube page

//variable for the locally-stored song info string
var setListSong = localStorage.getItem("song info");
//variable for the newly created list items
var listItem = document.createElement("li");

//upon button click, function adds most recent song info key as a set-list entry
function addToSetList() {
        //checks to see if song info is available in local storage
    if (!setListSong) {
        return;
    } else {
        //creates an li 
        listItem = document.createElement("li");
        //sets the text of the li to "song info" pulled from local storage
        listItem.textContent = setListSong;
        //appends the li to the ul
        document.getElementById("set-list").appendChild(listItem);
    }

}

//adds event listener for click of "Add to Set-List Button" to run addToSetList function
addToSetlistButton.addEventListener("click", function(event) {
    event.preventDefault();
    addToSetList();
})

