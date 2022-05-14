let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textArea = document.getElementById("textArea");
let msg = document.getElementById("msg");

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
};