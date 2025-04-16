$(document).ready(function () {
    let loggedInUserId = localStorage.getItem("loggedUser");
    let authToken = localStorage.getItem("authToken");

    console.log("??????", authToken)
    console.log(">>>>>> log user id", loggedInUserId);

    $.ajax({
        url: `http://localhost:8080/api/v1/candidate/user/${loggedInUserId}`,
        method: "GET",
        headers: {
            "Authorization": "Bearer " + authToken
        },

        success:(res)=>{
            console.log("res candidate",res)

            if (Array.isArray(res) && res.length > 0) {
                const candidate = res[0];
                const candidateId = candidate.cand_id;

                localStorage.setItem("candidateId", candidateId);
                console.log("Candidate ID saved:", candidateId);


            }

            },


        error: (error) => {

        }
    })

})



$(document).ready(function () {


$(".sendApplication").click(()=>{


    let loggedCandidate = localStorage.getItem("candidateId")
    let jobId = localStorage.getItem("jobID")
    let authToken = localStorage.getItem("authToken");




    let name = $("#nameA").val();
    let message = $("#messageA").val();
    let email = $("#emailA").val();
    let fileInput = document.getElementById("resumeFile");
    let resumeFile = fileInput.files[0];


    const applicationData = {
        name: name,
        email:message ,
        message:email ,
        date: new Date().toISOString().split('T')[0],
        job: {
            jobId: jobId
        },
        candidate: {
            cand_id: loggedCandidate
        }
    };


    const formData = new FormData();
    formData.append("file", resumeFile);
    formData.append("application", new Blob([JSON.stringify(applicationData)], {
        type: "application/json"
    }));








    $.ajax({
        url: "http://localhost:8080/api/v1/application/save",
        method: "POST",
        data: formData,
        processData: false,
        contentType: false,
        headers: {
            "Authorization": "Bearer " + authToken
        },

        success:(res)=>{

            if (loggedCandidate === null){
                alert("make sure your profile complete")
            }

            console.log("Application submitted:", res);
            alert("Application submitted successfully!");

        },


        error: (error) => {

            if (loggedCandidate === null){
                alert("make sure your profile complete")
            }


            console.error("Submission error:", error);
            alert("Failed to submit application.");
        }
    })





})

})

