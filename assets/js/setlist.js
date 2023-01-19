//Creates functionality for button-click on youtube page adding song information to set-list page, maybe add function on search button that adds song info locally, to be retrieved by the "add song" button on youtube page

//variable for ul element selector
var setListUl = document.getElementById("set-list")

//variable for the locally-stored song info string
//variable for the newly created list items

//variable array to store several songs locally
//var setList = [];

var localSetList = JSON.parse(localStorage.getItem("saved setList"));

//var emptyArray = [];

function printToSetList() {
		//checks to see if song info is available in local storage
	//if (localSetList === null) {
        //console.log("You need to add songs!");
    //} else {
		for (var i = 0; i < localSetList.length; i++) {
        var songEntry = localSetList[i];
        var li = document.createElement("li");
        li.textContent = songEntry;
        li.setAttribute("data-index", i);

        var button = document.createElement("button");
        button.textContent = " Remove Song";

        li.appendChild(button);
        setListUl.appendChild(li);
	}
}

//function clearStoredSetList() {
 // localStorage.setItem("saved setList", JSON.stringify(emptyArray));
 // init();
//}

setListUl.addEventListener("click", function(event) {
  var element = event.target;
  var listItems = $("li");
  // Checks if element is a button


  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    localSetList.splice(index, 1);
    var editedSetList = localSetList;
    localStorage.setItem("saved setList", JSON.stringify(editedSetList));
    listItems.remove();
    printToSetList();
    // Store updated todos in localStorage, re-render the list
    //localSetList = JSON.parse(localStorage.getItem("saved setList"));
    //printToSetList();
     }
    });

printToSetList();