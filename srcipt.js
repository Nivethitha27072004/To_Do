const todolist = document.getElementById("ToDoList"); // ul
const newtodoinput = document.getElementById("newToDoItem"); // input
const addtodobutton = document.getElementById("addToDoButton"); // button

addtodobutton.addEventListener("click", () => {
    const newtodotext = newtodoinput.value.trim(); // get trimmed value

    if (newtodotext !== "") {
        const newtodoitem = document.createElement("li"); // create <li>
        newtodoitem.innerText = newtodotext;              // set text of <li>
 //edit//
        const edittodobtn = document.createElement("button");
        edittodobtn.innerText = "edit";
        edittodobtn.classList.add("edit-todo-btn");
        edittodobtn.addEventListener("click", function () {
            const updatedText = prompt("Edit your item:", newtodoitem.firstChild.textContent);
            if (updatedText !== null && updatedText.trim() !== "") {
                newtodoitem.firstChild.textContent = updatedText.trim();
            }
        });
//delete//
        const deletetobtn = document.createElement("button"); 
        deletetobtn.innerText = "delete";                     
        deletetobtn.classList.add("delete-todo-btn");

        deletetobtn.addEventListener("click", function () {
            newtodoitem.remove();
        });
//ui
       const buttonGroup = document.createElement("div");
buttonGroup.classList.add("todo-buttons");

buttonGroup.appendChild(edittodobtn);
buttonGroup.appendChild(deletetobtn);

newtodoitem.innerText = newtodotext;
newtodoitem.appendChild(buttonGroup);

        todolist.appendChild(newtodoitem);      // add <li> to <ul>
        newtodoinput.value = "";                // clear input box
    }
});
