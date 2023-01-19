//Populates paper set-list upon page load, allows users to click and remove songs from their set-list

//variable for ul element selector
var setListUl = document.getElementById("set-list");
//stores parsed set-list saved from Search page functions
var localSetList = JSON.parse(localStorage.getItem("saved setList"));

//defines the function to create and print set-list from local storage, adds button for editing purposes, prints to paper div
function printToSetList() {
	for (var i = 0; i < localSetList.length; i++) {
		var songEntry = localSetList[i];
		var li = document.createElement("li");
	//generates text for each li using song entry info from local storage
		li.textContent = songEntry;
		li.setAttribute("data-index", i);
	//creates "Remove Song" button
		var button = document.createElement("button");
		button.textContent = " Remove Song";
	//appends song entry and button to the ul
		li.appendChild(button);
		setListUl.appendChild(li);
	}
}

//adds event listener and function for the click of "Remove Song" buttons
setListUl.addEventListener("click", function(event) {
	var element = event.target;
	var listItems = $("li");

	if (element.matches("button") === true) {
		var index = element.parentElement.getAttribute("data-index");
	//removes the song from the saved set-list
		localSetList.splice(index, 1);
	//saves the newly edited set list
		var editedSetList = localSetList;
	//sets local storage to new set list
		localStorage.setItem("saved setList", JSON.stringify(editedSetList));
	//removes previously printed set list
		listItems.remove();
	//prints newly edited set list to paper div
		printToSetList();
	}
});

//calls printTSetList function
printToSetList();