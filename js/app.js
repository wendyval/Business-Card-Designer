function displayCompany() {
    document.getElementById("outputCompany").innerHTML = inputCompany.value; 
}

function displayMessage() {
    document.getElementById("outputMessage").innerHTML = inputMessage.value;
}

function changeBgColor() {
    document.getElementById("card").style.backgroundColor = inputBgColor.value;
}

function changeText() {
    document.getElementById("card").style.color = inputText.value;
}

function alignText(selectedBtn) {
    document.getElementById("card").className = selectedBtn;
}

function displayName() {
    document.getElementById("outputName").innerHTML = inputName.value;
}

function displayTitle() {
    document.getElementById("outputTitle").innerHTML = inputTitle.value;
}

function displayEmail() {
    document.getElementById("outputEmail").innerHTML = "Email: " + outputEmail.value;
}

function displayNumber() {
    document.getElementById("outputNumber").innerHTML = "Tel: " + inputNumber.value;
}

function submitForm() {
    if (!inputName.value || !inputCompany.value || !inputNumber.value || !inputEmail.value) {
        alert("Please complete all required sections.");
    }
}

function clearForm() {
    window.location.reload();
}

// Below is to update the date on the footer
let date = new Date();
let currentYear = date.getFullYear();
document.getElementById("year").innerHTML = currentYear;

