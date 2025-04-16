$("#candidate-save").click(function (event) {
    event.preventDefault();

    let authToken = localStorage.getItem("authToken");
    let loggedInUserId = localStorage.getItem("loggedUser");
    console.log("Token: " + authToken);

    if (!authToken) {
        Swal.fire("Unauthorized", "You need to log in first!", "error");
        return;
    }







    let candidateDTO = {
        name: $("#name").val(),
        age: $("#age").val(),
        gender: $("#gender").val(),
        experience: $("#experince").val(),
        website: $("#website").val(),
        country: $("#country").val(),
        city: $("#city").val(),
        full_address: $("#fullAddress").val(),
        description:$("#desc").val(),
        skills: skillsArray,
        position:$("#jobCategory").val(),
        user: { uid: loggedInUserId }
    };

    console.log("candidateDTO: ", candidateDTO);


    if (!$("#file-uploader")[0].files.length) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why did this happen?</a>'
        });
    }

    let formData = new FormData();
    formData.append("candidate", JSON.stringify(candidateDTO));
    formData.append("file", $("#file-uploader")[0].files[0]);

    $.ajax({
        url: 'http://localhost:8080/api/v1/candidate/register',
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        headers: {
            'Authorization': 'Bearer ' + authToken,
            'Accept': 'application/json'
        },
        success: function (response) {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your operation completed successfully!',
                showConfirmButton: true,
                timer: 3000
            });

        },
        error: function (xhr, status, error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
                footer: '<a href="">Why did this happen?</a>'
            });
            let errorMessage = xhr.responseJSON?.message || "Registration failed!";
        }
    });
});


