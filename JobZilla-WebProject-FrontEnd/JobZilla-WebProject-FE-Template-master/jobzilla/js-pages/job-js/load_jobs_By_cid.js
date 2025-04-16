/*
$(document).ready(function () {

    let loggedInUserId = localStorage.getItem("loggedUser");
    let authToken = localStorage.getItem("authToken");

    console.log("??????",authToken);
    console.log(">>>>>>", loggedInUserId);

    $.ajax({

        url:`http://localhost:8080/api/v1/job/company/{companyId}`,
        method: "GET",

        success: (response)=> {

        },

        error: function (xhr) {
            console.error("Error:", xhr.responseText)
        }

    })
















*/
