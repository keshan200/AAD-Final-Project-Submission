$("#candidate-update").click(function (event) {
    event.preventDefault();

    let authToken = localStorage.getItem("authToken");
    let loggedInUserId = localStorage.getItem("loggedUser");
    let loggedCandidateId = localStorage.getItem("loggedCandidateId");

    console.log("Token: " + authToken);

    if (!authToken) {
        Swal.fire("Unauthorized", "You need to log in first!", "error");
        return;
    }

    let candidateDTO = {
        cand_id:loggedCandidateId ,
        name: $("#name").val(),
        age: $("#age").val(),
        gender: $("#gender").val(),
        experience: $("#experience").val(),
        website: $("#website").val(),
        country: $("#country").val(),
        city: $("#city").val(),
        full_address: $("#fullAddress").val(),
        description: $("#desc").val(),
        skills: skillsArray,
        user: { uid: loggedInUserId }
    };

    console.log("candidateDTO: ", candidateDTO);

    let formData = new FormData();
    formData.append("candidate", JSON.stringify(candidateDTO));


    if ($("#file-uploader")[0].files.length > 0) {
        formData.append("file", $("#file-uploader")[0].files[0]);
    }

    $.ajax({
        url: 'http://localhost:8080/api/v1/candidate/update',
        method: 'PUT',
        data: formData,
        processData: false,
        contentType: false,
        headers: {
            'Authorization': 'Bearer ' + authToken,
            'Accept': 'application/json'
        },
        success: function (response) {
            Swal.fire("Success", "Candidate details updated successfully!", "success");
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText || error);
            let errorMessage = xhr.responseJSON?.message || "Update failed!";
            Swal.fire("Error", errorMessage, "error");
        }
    });
});
