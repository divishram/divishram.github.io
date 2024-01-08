window.onload = pageLoaded;

function pageLoaded() {
    var contact = document.forms.contact_form;
    contact.addEventListener("submit", function (event) {
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var message = document.getElementById("message");

        var nameErr = document.getElementById("nameErr");
        var emailErr = document.getElementById("emailErr");
        var messageErr = document.getElementById("messageErr");

        var errorNum = 0;
        if (name.value === "") {
            console.log("Name Error!")
            nameErr.innerHTML = "Please enter your name";
            errorNum++;
        }
        else {
            nameErr.innerHTML = "";
        }
        if (email.value === "") {
            emailErr.innerHTML = "Please enter your email";
            errorNum++;
        }
        else {
            emailErr.innerHTML = "";
        }
        if (message.value === "") {
            messageErr.innerHTML = "Please write your message";
            errorNum++;
        }
        else {
            messageErr.innerHTML = "";
        }
        if (errorNum > 0) {
            event.preventDefault();
        }
        else if (errorNum === 0) {
            alert("Your message was sent and our dedicated staff will address it as soon as possible!");
        }

    })

}

