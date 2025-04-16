/* 	<div class="wt-dashboard-msg-search-list-wrap">
                            	<a href="javascript:;" class="msg-user-info clearfix">
                                	<div class="msg-user-timing">2 hours ago</div>
                                	<div class="msg-user-info-pic"><img src="images/user-avtar/pic1.jpg" alt=""></div>
                                    <div class="msg-user-info-text">
                                    	<div class="msg-user-name">Rustin Duza</div>
                                        <div class="msg-user-discription">All created by our Global</div>
                                    </div>
                                </a>
                            </div>*/







$(document).ready(function (){


    let loggedInUserSenderId = localStorage.getItem("loggedUser");
    let authToken = localStorage.getItem("authToken");

    console.log("??????",authToken)
    console.log(">>>>>> log id", loggedInUserSenderId);

    $.ajax({
        url: `http://localhost:8080/api/v1/message/receivers/${loggedInUserSenderId}`,
        method: "GET",
        headers: {
            "Authorization": "Bearer " + authToken
        },

        success: (response)=> {


            console.log("response cht",response)

        },


        error:(err)=>{



        }




    })




























})