let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textArea = document.getElementById("textArea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");

form.addEventListener("submit", (e)=>{
  e.preventDefault();
});

let formValidation = ()=> {
  if(textInput.value === ""){
    msg.innerHTML = "Task cannot be blank";
  }
  else {
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = textInput.value;
  data["date"] = dateInput.value;
  data["description"] = textArea.value;

  createTasks();
};

let createTasks = () => {
  tasks.innerHTML += `
  <div>
  <Span class="fw-bold">${data.text}</Span>
  <Span class="small text-secondary">${data.date}</Span>
  <p>${data.description}</p>
  <span class="options">
    <i class="fas fa-edit"></i>
    <i class="fas fa-trash-alt"></i>
  </span>
</div>`;
};

let resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textArea.value = "";
};