let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
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
  }
}