$(document).ready(function () {

        let loggedInUserId = localStorage.getItem("loggedUser");
        let authToken = localStorage.getItem("authToken");


        $.ajax({
            url: `http://localhost:8080/api/v1/candidate/user/${loggedInUserId}`,
            method: "GET",
            headers: {
                "Authorization": "Bearer " + authToken
            },

            success: (response)=> {
                console.log(response)

                response.forEach((candidate)=>{

                    let candId = candidate.cand_id;
                    localStorage.setItem("loggedCandidateId",candId)

                    $("#name").val(candidate.name);
                    $("#mobile").val(candidate.user.mobile);
                    $("#email").val(candidate.user.email);
                    $("#website").val(candidate.website);
                    $("input[name='company_since']").eq(0).val(candidate.qualification);
                    $("input[name='company_since']").eq(1).val(candidate.language);
                    $("input[name='company_since']").eq(2).val(candidate.jobCategory);
                    $("input[name='company_since']").eq(3).val(candidate.experience);
                    $("#skills").val(candidate.skills);
                    $("#age").val(candidate.age);
                    $("#gender").val(candidate.gender);
                    $("#country").val(candidate.country);
                    $("#city").val(candidate.city);
                    $("input[name='company_since']").eq(7).val(candidate.postcode);
                    $("#fullAddress").val(candidate.full_address);
                    $("#desc").val(candidate.description);


                })
            },

            error:(err)=>{


            }
        })










})

