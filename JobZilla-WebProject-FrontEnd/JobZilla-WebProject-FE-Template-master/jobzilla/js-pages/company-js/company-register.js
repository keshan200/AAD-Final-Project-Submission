$(document).ready(function () {

    const username = $("#userNameE");
    const password = $("#PasswordE");
    const email = $("#emailE");
    const tel = $("#telE");


    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|yahoo\.com)$/;
    const phoneRegex = /^[0-9]{10}$/;


    function validateField(field, condition) {
        if (condition) {
            field.css("border", "2px solid green");
        } else {
            field.css("border", "2px solid red");
        }
    }


    username.on("keyup blur", function () {
        validateField(username, username.val().trim() !== "" && username.val().length >= 3);
    });

    password.on("keyup blur", function () {
        validateField(password, password.val().trim() !== "" && password.val().length >= 6);
    });

    email.on("keyup blur", function () {
        validateField(email, email.val().trim() !== "" && emailRegex.test(email.val()));
    });

    tel.on("keyup blur", function () {
        validateField(tel, tel.val().trim() !== "" && phoneRegex.test(tel.val()));
    });


    $("#singUpE").click(function () {
        let isValid = true;
        let messages = [];

        if (username.val().trim() === "" || username.val().length < 3) {
            messages.push("⚠️ Username must be at least 3 characters long.");
            isValid = false;
        }
        if (password.val().trim() === "" || password.val().length < 6) {
            messages.push("⚠️ Password must be at least 6 characters long.");
            isValid = false;
        }
        if (email.val().trim() === "" || !emailRegex.test(email.val())) {
            messages.push("⚠️ Invalid email format. Only Gmail, Yahoo, and Outlook are allowed.");
            isValid = false;
        }
        if (tel.val().trim() === "" || !phoneRegex.test(tel.val())) {
            messages.push("⚠️ Invalid phone number. It must be 10 digits.");
            isValid = false;
        }

        if (!isValid) {
            alert(messages.join("\n"));
            return;
        }


        $.ajax({
            url: "http://localhost:8080/api/v1/user/register",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                email: email.val(),
                password: password.val(),
                username: username.val(),
                mobile: tel.val(),
                role: "EMPLOYER"
            }),
            success: function (data) {
                alert("✅ Registration Successful!");
                console.log("Success:", data);

            },
            error: function (xhr, status, error) {
                alert("❌ Registration Failed!");
                console.error("Error:", error);
            }
        });
    });
});
