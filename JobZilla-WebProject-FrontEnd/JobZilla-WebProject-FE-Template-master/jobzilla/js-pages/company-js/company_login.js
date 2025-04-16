





$(document).ready(function () {




    $("#loginButton").click(() => {

        let email = $("#email").val();
        let password = $("#password").val();

        $.ajax({
            url: "http://localhost:8080/api/v1/auth/signIn",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                email: email,
                password: password,
            }),
            success: function (response) {

                console.log("response st eka",response)


                let Authtoken = response.data.token;
                let userRole = response.data.role;
                let Name = response.data.name;
                let uid = response.data.id;



                localStorage.setItem("authToken", Authtoken);
                localStorage.setItem("userEmail", email);
                localStorage.setItem("Role", userRole);
                localStorage.setItem("name", Name);
                localStorage.setItem("loggedUser",uid)








                console.log(Authtoken)
                console.log(uid)
                console.log(userRole);
                console.log(response)

                if (userRole === 'EMPLOYER'&& Authtoken){
                    window.location.href = "dashboard.html"
                }else {
                    window.location.href = "index.html"
                }

            },
            error: function (xhr, status, error) {
                console.error("Error:", error);

                if (xhr.status === 403) {
                    $("#alertMessage").html(`
                    <div style="border-radius: 20px" class="alert alert-danger" role="alert">
                       <strong>Account Restricted!</strong> Your account is currently inactive and cannot be used to log in. 
                       Please contact <a href="mailto:support@example.com" class="alert-link">support@example.com</a> or call us at <strong>+1-800-123-456</strong> for assistance.
                    </div>
                `);
                } else if (xhr.status === 401) {
                    $("#logCredAlertMessage").html(`
                    <div class="alert alert-danger" role="alert">
                     Oops! Your email or password doesn't match our records. Please try again.
                     </div>
                `);
                } else {
                    alert("An error occurred. Please try again.");
                }
            }
        });
    });
});