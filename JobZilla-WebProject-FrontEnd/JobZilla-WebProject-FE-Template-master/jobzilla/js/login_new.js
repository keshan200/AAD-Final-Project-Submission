$(document).ready(function () {


    let authToken = localStorage.getItem("authToken");
    let userRole = localStorage.getItem("Role");
    let name = localStorage.getItem("name");


    $(document).on("click", "#logOut", function() {
        localStorage.clear();
        window.location.href = "index.html";
    });


    if (authToken && userRole && name) {
        $("#accSection").html(`
            <div class="welcome-message">
                <div class="dashboard-user-section">
                    <div class="listing-user">
                        <div class="dropdown">
                            <a href="javascript:;" class="dropdown-toggle" id="ID-ACCOUNT_dropdown" data-bs-toggle="dropdown">
                                <div class="user-name text-black">
                                    <span>
                                        <img src="" alt="profile">
                                    </span>${name}
                                </div>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="ID-ACCOUNT_dropdown">
                                <ul>
                                    <li><a href="candidate-dashboard.html"><i class="fa fa-home"></i> Dashboard</a></li>
                                    <li><a href="candidate-chat.html"><i class="fa fa-envelope"></i> Messages</a></li>
                                    <li><a href="candidate-profile.html"><i class="fa fa-user"></i> Profile</a></li>
                                    <li style="color: red;" id="logOut"><i class="fa fa-share-square"></i> Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
        $("#authSection").css("display", "block");
    }


    $("#loginBtn").click(() => {
        let email = $("#loginEmail").val();
        let password = $("#loginPassword").val();

        $.ajax({
            url: "http://localhost:8080/api/v1/auth/signIn",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                email: email,
                password: password,
            }),
            success: function (response) {

                let Authtoken = response.data.token;
                let userRole = response.data.role;
                let Name = response.data.name;
                let uid = response.data.id;

                console.log(response)


                localStorage.setItem("authToken", Authtoken);
                localStorage.setItem("userEmail", email);
                localStorage.setItem("Role", userRole);
                localStorage.setItem("name", Name);
                localStorage.setItem("loggedUser", uid);


                $("#sign_up_popup2").modal('hide');
                $("#signUpButton").hide();

                $("#accSection").html(`          
                     <div class="welcome-message">
                       <div class="dashboard-user-section">
                           <div class="listing-user">
                               <div class="dropdown">
                                   <a href="javascript:;" class="dropdown-toggle" id="ID-ACCOUNT_dropdown" data-bs-toggle="dropdown">
                                       <div class="user-name text-black">
                                           <span>
                                               <img src="" alt="profile">
                                           </span>${response.data.name}
                                       </div>
                                   </a>
                                   <div class="dropdown-menu" aria-labelledby="ID-ACCOUNT_dropdown">
                                       <ul>
                                           <li><a href="dashboard.html"><i class="fa fa-home"></i> Dashboard</a></li>
                                           <li><a href="dash-messages.html"><i class="fa fa-envelope"></i> Messages</a></li>
                                           <li><a href="candidate-profile.html"><i class="fa fa-user"></i> Profile</a></li>
                                           <li style="color: red;" id="logOut"><i class="fa fa-share-square"></i>Logout</li>
                                       </ul>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div> `);



                    $("#accSection").css("display", "block");


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

$(document).ready(function () {


    $("#logOut").click(()=>{

        $("#accSection").css("display", "none");
        $("#signUpButton").show();

        console.log("clear");
    })



})





         /*<div class="welcome-message">
                       <div class="dashboard-user-section">
                           <div class="listing-user">
                               <div class="dropdown">
                                   <a href="javascript:;" class="dropdown-toggle" id="ID-ACCOUNT_dropdown" data-bs-toggle="dropdown">
                                       <div class="user-name text-black">
                                           <span>
                                               <img src="images/user-avtar/pic4.jpg" alt="">
                                           </span>${response.data.name}
                                       </div>
                                   </a>
                                   <div class="dropdown-menu" aria-labelledby="ID-ACCOUNT_dropdown">
                                       <ul>
                                          <!-- <li><a href="dashboard.html"><i class="fa fa-home"></i> Dashboard</a></li>
                                           <li><a href="dash-messages.html"><i class="fa fa-envelope"></i> Messages</a></li>
                                           <li><a href="candidate-profile.html"><i class="fa fa-user"></i> Profile</a></li>
                                           <li id="logOut" ><a href=""><i class="fa fa-share-square"></i> Logout</a></li>-->
                                       </ul>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>*/