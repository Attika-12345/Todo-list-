


const inputbox=document.getElementById("inputbox");
const addBtn=document.getElementById("addBtn");
const listTodo=document.getElementById("listTodo");

 let editingElement = null; 

//Function to add to do
const addTodo=()=>{
    const inputText=inputbox.value.trim();
    if(inputText.length<=0){
        alert("you must write something in your to do");
        return false;
    }
    
    if(addBtn.value==="Edit"){
      //update existing task
      const todoText = editingElement.querySelector("p");
      todoText.textContent=inputbox.value; 

      //reset back to  Add mode
      addBtn.value = "Add"
      inputbox.value = "";
      editingElement = null;
    }
   else{    
    //createing p tag and li
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML=inputText;
    li.appendChild(p);
    listTodo.appendChild(li);
     inputbox.value="";
     

//creating edit button
    const editBtn=document.createElement("button");
    editBtn.innerText="Edit";
    editBtn.classList.add("btn", "editBtn")   // class add kora holo derict js a
    li.appendChild(editBtn);
     
     //creating Delete button
    const deleteBtn=document.createElement("button");
    deleteBtn.innerText="Remove";
    deleteBtn.classList.add("btn","deleteBtn")   //class add kora holo derict js a
    li.appendChild(deleteBtn);

    
    };
};


//Function to update:(edit/delete) to do
const updateTodo = (e) => {
  if (e.target.textContent === "Remove") {
    listTodo.removeChild(e.target.parentElement);//erkaj holoo button remove he to er parent element ke delete koro
  }

  if (e.target.textContent === "Edit") {
    editingElement = e.target.parentElement;   // use global variable      
    const todoText = editingElement.querySelector("p");    
    inputbox.value = todoText.textContent;     //jokhon amra edit korbo tokhon ata inputbox a chole jabe
    inputbox.focus();
    addBtn.value="Edit" //change main button to edit
    
  }
};


addBtn.addEventListener('click', addTodo);

listTodo.addEventListener('click',updateTodo);
