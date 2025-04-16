$("#detailsSaveBtn").click(function (event) {
    event.preventDefault();

    let authToken = localStorage.getItem("authToken");
    let loggedInUserId = localStorage.getItem("loggedUser");
    console.log("Token: " + authToken);

    if (!authToken) {
        Swal.fire("Unauthorized", "You need to log in first!", "error");
        return;
    }

    let companyDTO = {
        company_name: $("#name").val(),
        website: $("#website").val(),
        est_since: $("#est").val(),
        description: $("#desc").val(),
        country: $("#country").val(),
        city: $("#city").val(),
        full_address: $("#fulladrs").val(),

        user:{ uid:loggedInUserId}
    };

    console.log("onjects>>>"+loggedInUserId);

    if (!$("#file-uploader")[0].files.length || !$("#bannerImg")[0].files.length) {
        Swal.fire("No Files", "You must upload both a display picture and banner image!", "warning");
        return;
    }


    let formData = new FormData();
    formData.append("company", JSON.stringify(companyDTO));
    formData.append("files", $("#file-uploader")[0].files[0]);
    formData.append("files", $("#bannerImg")[0].files[0]);


    $.ajax({
        url: 'http://localhost:8080/api/v1/company/register',
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        headers: {
            'Authorization': 'Bearer '+ authToken,
            'Accept': 'application/json'
        },
        success: function (response) {
            Swal.fire("Success", "Company registered successfully!", "success");



            $.ajax({
                url: `http://localhost:8080/api/v1/company/user/${loggedInUserId}`,
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + authToken
                },



                success: (response)=> {

                    response.forEach(company2 => {
                        let companyID = company2.cid;
                        console.log(">>>>>Company ID:", companyID);
                        localStorage.setItem("loggedUserCid", companyID)
                    })
                },

                error: (erro)=>{
                    alert("cant load compay id")
                }
            })

        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText || error);
            let errorMessage = xhr.responseJSON?.message || "Registration failed!";
            Swal.fire("Error", errorMessage, "error");
        }
    });
});




