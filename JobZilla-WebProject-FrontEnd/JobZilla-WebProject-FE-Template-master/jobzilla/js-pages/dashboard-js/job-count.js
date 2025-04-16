$(document).ready(function () {



    let logedCompanyID = localStorage.getItem("loggedCompanyId");
    let authToken = localStorage.getItem("authToken");


    $.ajax({

        url:`http://localhost:8080/api/v1/job/job-count/${logedCompanyID}`,
        method:'GET',
        headers: {
            "Authorization": "Bearer " + authToken
        },


        success:(res)=>{

            console.log("count",res)
            let count = $(".count");

            let countset = ` <div class="wt-card-right wt-total-active-listing counter">${res}</div>`

            count.append(countset)
        },


        error:(err)=>{
            console.error("Error fetching job count:", err);
        }


    })











})