const firstName = document.querySelector("#Fname")
const lastName = document.querySelector("#Lname")
const email = document.querySelector("#email")
const query = document.querySelector("#query")
const message = document.querySelector("#message")
const consent = document.querySelector("#consent")
const success = document.querySelector("#success")
const popup = document.querySelector("#popup")
const errorNodes = document.querySelectorAll(".error")


const form = document.querySelector("#container")

form.addEventListener("submit", function(e){
    e.preventDefault();
    validateForm();
})

function validateForm(){

    clearMessages();
    let errorFlag = false;

const querySelected = document.querySelector('input[name="query"]:checked');

    if(firstName.value.length < 1){
        errorNodes[0].innerText = "This field is required";
        errorNodes[0].style.color = "red";
        firstName.classList.add("error-border")
    errorFlag = true;

    }
    if(lastName.value.length < 1){
        errorNodes[1].innerText = "This field is required";
        errorNodes[1].style.color = "red";
        lastName.classList.add("error-border")
    errorFlag = true;
    }
    if(!emailIsValid(email.value)){
        errorNodes[2].innerText = "Please enter a valid email address";
        errorNodes[2].style.color = "red";
        email.classList.add("error-border")
        errorFlag = true;
    }
    if(message.value.length < 1){
        errorNodes[4].innerText = "This field is required";
        errorNodes[4].style.color = "red";
        message.classList.add("error-border")
        errorFlag = true;
    }

    if(!querySelected) {
        errorNodes[3].innerText = "Please select a query type";
        errorNodes[3].style.color = "red";
        errorFlag = true;
    }
   if(!consent.checked){
        errorNodes[5].innerText = "To submit this form, please consent to being contacted";
        errorNodes[5].style.color = "red";
        errorFlag = true;
   }
   if(!errorFlag){
     popup.classList.add("show-popup");
   }

} 

function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
        errorNodes[i].style.color = "";
    }

    firstName.classList.remove("error-border");
    lastName.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
    
}

function emailIsValid(email){
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);

}
const closeBtn = document.querySelector(".time");

closeBtn.addEventListener("click", function(e){
    e.preventDefault();
    popup.classList.remove("show-popup");
});