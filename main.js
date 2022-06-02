let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

let formValidation = () => {
  if(textInput.value === ""){
    msg.innerHTML = "Task cannot be blank";
  }
  else {
    msg.innerHTML = "";
    acceptData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();
    
    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();
  }
};

let data = [];

let acceptData = () => {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    description: textarea.value,
  });

  localStorage.setItem("data", JSON.stringify(data));

  console.log(data);
};

let createTasks = () => {
  tasks.innerHTML = "";
  data.map((x,y) => {
    return (tasks.innerHTML += `
    <div id=${y}>
    <Span class="fw-bold">${x.text}</Span>
    <Span class="small text-secondary">${x.date}</Span>
    <p>${x.description}</p>
    <span class="options">
      <i class="fas fa-edit"></i>
      <i onClick ="deleteTask(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>`
  );
  });

resetForm();
};

let deleteTask = (e)=>{
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("data", JSON.stringify(data));
};

let editTask = (e)=> {
  let selectedTask = e.parentElement.parentElement;

  textInput.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  textarea.value = selectedTask.children[2].innerHTML;

  deleteTask(e);
};

let resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
};

(() => {
  data = JSON.parse(localStorage.getItem("data"));
  createTasks();
})();