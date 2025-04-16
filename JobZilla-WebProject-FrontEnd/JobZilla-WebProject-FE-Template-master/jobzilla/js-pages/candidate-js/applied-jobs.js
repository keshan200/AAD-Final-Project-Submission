$(document).ready(function () {

    let loggedInCandidateId = localStorage.getItem("loggedCandidateId");
    let authToken = localStorage.getItem("authToken");



    $.ajax({
        url:`http://localhost:8080/api/v1/application/apply-jobs/${loggedInCandidateId}`,
        method:'GET',

       headers:{
           "Authorization": "Bearer " + authToken
       },

        success:(res)=>{

            console.log(res)

        },

        error:(err)=>{

        }


    })



















})