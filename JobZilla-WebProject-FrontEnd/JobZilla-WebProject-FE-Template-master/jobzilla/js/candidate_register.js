const token = localStorage.getItem("token");


$("#canBtn").click(()=>{

    let username = $("#userName").val();
    let password = $("#Password").val();
    let email = $("#email").val();
    let tel = $("#tel").val();



    $.ajax({
        url: "http://localhost:8080/api/v1/user/register",
        method:"POST",
        contentType: "application/json",
        data: JSON.stringify({
            email: email,
            password: password,
            username: username,
            mobile: tel,
            role: "CANDIDATE"
        }),
        success: function(data) {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your operation completed successfully!',
                showConfirmButton: true,
                timer: 3000
            });

            $("#sign_up_popup").modal('hide');
            $("#sign_up_popup2").modal('show');
            $("#signUpButton").hide();

        },
        error: function(xhr, status, error) {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
                footer: '<a href="">Why did this happen?</a>'
            });
        }

    })
});



$(document).ready(function () {
    const username = $("#userName");
    const password = $("#Password");
    const email = $("#email");
    const tel = $("#tel");


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;


    username.on("keyup blur", function () {
        if ($.trim(username.val()) === "") {
            username.css("border", "2px solid red");
        } else if (username.val().length < 3) {
            username.css("border", "2px solid red");
        } else {
            username.css("border", "2px solid green");
        }
    });


    password.on("keyup blur", function () {
        if ($.trim(password.val()) === "") {
            password.css("border", "2px solid red");
        } else if (password.val().length < 6) {
            password.css("border", "2px solid red");
        } else {
            password.css("border", "2px solid green");
        }
    });


    email.on("keyup blur", function () {
        if ($.trim(email.val()) === "") {
            email.css("border", "2px solid red");
        } else if (!emailRegex.test(email.val())) {
            email.css("border", "2px solid red");
        } else {
            email.css("border", "2px solid green");
        }
    });


    tel.on("keyup blur", function () {
        if ($.trim(tel.val()) === "") {
            tel.css("border", "2px solid red");
        } else if (!phoneRegex.test(tel.val())) {
            tel.css("border", "2px solid red");
        } else {
            tel.css("border", "2px solid green");
        }
    });


    $("#canBtn").on("click", function (event) {
        let isValid = true;


        if ($.trim(username.val()) === "") {
            alert("Username is required");
            username.css("border", "2px solid red");
            username.focus();
            isValid = false;
        } else if (username.val().length < 3) {
            alert("Username must be at least 3 characters long");
            username.css("border", "2px solid red");
            username.focus();
            isValid = false;
        } else {
            username.css("border", "2px solid green");
        }


        if ($.trim(password.val()) === "") {
            alert("Password is required");
            password.css("border", "2px solid red");
            password.focus();
            isValid = false;
        } else if (password.val().length < 6) {
            alert("Password must be at least 6 characters long");
            password.css("border", "2px solid red");
            password.focus();
            isValid = false;
        } else {
            password.css("border", "2px solid green");
        }


        const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;
        if ($.trim(email.val()) === "") {
            alert("Email is required");
            email.css("border", "2px solid red");
            email.focus();
            isValid = false;
        } else if (!emailRegex.test(email.val())) {
            alert("Invalid email address. Only Gmail and Yahoo domains are allowed.");
            email.css("border", "2px solid red");
            email.focus();
            isValid = false;
        } else {
            email.css("border", "2px solid green");
        }



        if ($.trim(tel.val()) === "") {
            alert("Phone number is required");
            tel.css("border", "2px solid red");
            tel.focus();
            isValid = false;
        } else if (!phoneRegex.test(tel.val())) {
            alert("Invalid phone number. It must be 10 digits long.");
            tel.css("border", "2px solid red");
            tel.focus();
            isValid = false;
        } else {
            tel.css("border", "2px solid green");
        }

        if (!isValid) {
            event.preventDefault();
        } else {

        }
    });
});




