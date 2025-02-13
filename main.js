/*
TO DO
- Save lists to localStorage (probably just the whole allListsDiv div)
- Create a function for adding numbrs if the ID is found
*/



function toggleChecked(elementID){
  document.getElementById(elementID).classList.toggle("checked-item"); //Strikethrough item
}


const newListForm = document.getElementById("new-list-form");
const allListsDiv = document.getElementById("all-lists-div");

newListForm.addEventListener("submit", function(event){
  event.preventDefault();
  newList(document.getElementById("new-list-name").value);
});


function deleteSpaces(toFormat){
  let formatted = toFormat.replace(/ /g, "-").toLowerCase();
  return formatted; // /g = global replacement
}

function checkDuplicates(toCheck, tag, space = "-"){
  if(document.getElementById(`${toCheck}-${tag}`)) {    // Checks if id is already taken
    let endNum = 1;
    while(document.getElementById(`${toCheck}-${endNum}-${tag}`)) {    // If id is taken, loops through
      endNum ++;                                        // numbers until an unused one can be claimed
    }
    formatted += `${space}${endNum}`;                          // Adds ending number to div following "-"
  }

}


function newList(newListName) {
  const formattedName = deleteSpaces(`${newListName}-div`);
  newDiv = document.createElement("div");
  newDiv.setAttribute("id", `${formattedName}-div`);
  newDiv.setAttribute("class", "list-div");
  newDivDeleteButton = document.createElement("button");
  newDivDeleteButton.setAttribute("id", `delete-list-button-${formattedName}`);
  newDivDeleteButton.setAttribute("class", "delete-list-button");
  newDivDeleteButton.setAttribute("onclick", `deleteList('${formattedName}-div')`);
  newDivDeleteButton.appendChild(document.createTextNode("Delete List"));
  newDiv.appendChild(newDivDeleteButton);
  newDivTitle = document.createElement("h2");
  newDivTitle.appendChild(document.createTextNode(newListName));
  newDivTitle.setAttribute("id", `${formattedName}-title`);
  newDivTitle.setAttribute("class", "list-title");
  newDiv.appendChild(newDivTitle);
  newDivul = document.createElement("ul");
  newDivul.setAttribute("id", `${formattedName}-ul`);
  newDivul.setAttribute("class", "list-ul");
  newDivli = document.createElement("li");
  newDivli.setAttribute("id", `${formattedName}-input-li`);
  newDivli.setAttribute("class", "input-li");
  newDivform = document.createElement("form");
  newDivform.setAttribute("id", `${formattedName}-input-form`);
  newDivinput = document.createElement("input");
  newDivinput.setAttribute("id", `${formattedName}-item-input`);
  newDivinput.setAttribute("class", "item-input");
  newDivinput.setAttribute("placeholder", "Add item...");
  newDivinput.setAttribute("type", "text");
  newDivinput.setAttribute("required", "");
  newDivul.appendChild(newDivli);
  newDivli.appendChild(newDivform);
  newDivform.appendChild(newDivinput);
  newDiv.appendChild(newDivul);
  



  allListsDiv.appendChild(newDiv);
  document.getElementById("new-list-name").value = "";
  
  newDivform.addEventListener("submit", function(event) {
    event.preventDefault();
    addItem(document.getElementById(`${formattedName}-item-input`).value, formattedName);
  });
  
  document.getElementById(`${formattedName}-item-input`).value = "hello there";

}


function deleteList(toDeleteID) {
  const toDelete = document.getElementById(toDeleteID);
  toDelete.remove();
}

function addItem(toAddItem, formattedListName) {
  console.log("running addItem function");
  console.log(`formattedListName: ${formattedListName}`);
  toAddListul = document.getElementById(`${formattedListName}-ul`);
  toAddListli = document.createElement("li");
  toAddListli.setAttribut("id", checkDuplicates(`${formattedListName}`));
}
