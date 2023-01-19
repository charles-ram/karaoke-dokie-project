//Creates functionality for button-click on youtube page adding song information to set-list page, maybe add function on search button that adds song info locally, to be retrieved by the "add song" button on youtube page

//variable for ul element selector
var setListUl = document.getElementById("set-list")
//variable for the locally-stored song info string
//variable for the newly created list items
var li = document.createElement("li");
//variable array to store several songs locally
//var setList = [];

var localSetList = JSON.parse(localStorage.getItem("saved setList"));

function printToSetList() {
		//checks to see if song info is available in local storage
	if (localSetList === null) {
        console.log("You need to add songs!");
    } else {
		for (var i = 0; i < localSetList.length; i++) {
		var songEntry = localSetList[i];
       
        li.textContent = songEntry;
        li.setAttribute("data-index", i);

        var button = document.createElement("button");
        button.textContent = " X Remove Song";

        li.appendChild(button);
        setListUl.appendChild(li);
        return;
	};
}
}

printToSetList();
