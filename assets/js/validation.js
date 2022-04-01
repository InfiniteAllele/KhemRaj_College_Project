function validationContent() {
    var fname = document.getElementById("f_name").value;
    var lname = document.getElementById("l_name").value;
    var age = document.getElementById("age_no").value;
    var phone = document.getElementById("phone_no").value;
    var element = document.getElementById("submit_btn");
    var alert = document.getElementById("warning");
    if (fname == "") {
        element.classList.add("disabled");
        document.getElementById("submit_btn").disabled = true;
        alert.classList.add("alert");
    } else {
        element.classList.remove("disabled");
        document.getElementById("submit_btn").disabled = false;
        alert.classList.remove("alert");
    }
    if (lname == "") {
        element.classList.add("disabled");
        document.getElementById("submit_btn").disabled = true;
        alert.classList.add("alert");
    } else {
        element.classList.remove("disabled");
        document.getElementById("submit_btn").disabled = false;
        alert.classList.remove("alert");
    }
    if (age == "") {
        element.classList.add("disabled");
        document.getElementById("submit_btn").disabled = true;
        alert.classList.add("alert");
    } else {
        element.classList.remove("disabled");
        document.getElementById("submit_btn").disabled = false;
        alert.classList.remove("alert");
    }
    if (phone == "") {
        element.classList.add("disabled");
        document.getElementById("submit_btn").disabled = true;
        alert.classList.add("alert");
    } else {
        element.classList.remove("disabled");
        document.getElementById("submit_btn").disabled = false;
        alert.classList.remove("alert");
    }

}