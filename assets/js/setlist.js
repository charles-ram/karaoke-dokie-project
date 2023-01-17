//Creates functionality for button-click on youtube page adding song information to set-list page, maybe add function on search button that adds song info locally, to be retrieved by the "add song" button on youtube page

//variable for ul element selector
var setListUl = document.getElementById("set-list")
//variable for the locally-stored song info string
var songEntry = localStorage.getItem("song info");
//variable for the newly created list items
var li = document.createElement("li");
//variable array to store several songs locally
var setList = [];

//upon button click, function adds most recent song info key as a set-list entry
function addToSetList() {
        //checks to see if song info is available in local storage
    if (songEntry === null) {
        return;
    } else {
        for (var i = 0; i < setList.length; i++) {
           var songEntry = setList[i];
        //creates an li 
        li.document.createElement("li");
        //sets the text of the li to "song info" pulled from local storage
        li.textContent = songEntry;
        li.setAttribute("data-index", i);
        //appends the li to the ul
        setListUl.appendChild(li);
    }
}

function localparse() {
    var storedSongs = JSON.parse(localStorage.getItem("setList"));

    if (storedSongs !== null) {
        setList = storedSongs;
    }

    addToSetList();
}

function storeSongs() {
    localStorage.setItem("setList", JSON.stringify(setList));
}
//adds event listener for click of "Add to Set-List Button" to run addToSetList function
addToSetlistButton.addEventListener("click", function(event) {
    event.preventDefault();
    addToSetList()
});

localparse()
}