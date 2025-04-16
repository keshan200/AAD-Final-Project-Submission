$(document).ready(function () {
    $.ajax({
        url: "http://localhost:8080/api/v1/candidate/getAll",
        method: "GET",
        success: function (response) {
            loadCandidates(response);
        },
        error: function (xhr) {
            console.error("Error:", xhr.responseText);
        }
    });
});



function loadCandidates(candidates) {
    let container = $(".candidate-container");
    container.empty();
    console.log("comp",candidates)



    candidates.forEach(cand => {
        console.log(" carddid",cand.cand_id)
        console.log("img url",cand.img)
        let candidateCard =
              ` <li> <div class="twm-candidates-list-style1 mb-5">
                                             <div class="twm-media">
                                                 <div class="twm-media-pic">
                                                    <img src="${cand.img}" alt="#">
                                                 </div>
                                                 <div class="twm-candidates-tag"><span>Featured</span></div>
                                             </div>
                                             <div class="twm-mid-content">
                                                 <a  class="twm-job-title">
                                                     <h4>${cand.name}</h4>
                                                 </a>
                                                 <p>${cand.position}</p>
                                                 
                                                 <div class="twm-fot-content">
                                                     <div class="twm-left-info">
                                                        <p class="twm-candidate-address"><i class="feather-map-pin"></i>${cand.city}</p>
                                                        
                                                     </div>
                                                     <div class="twm-right-btn">
                                                         <a class="twm-view-prifile site-text-primary viewProfile" data-cand-id="${cand.cand_id}">View Profile</a>
                                                     </div>
                                                </div>
                                             </div>
                                             
                                         </div>
                                     </li> `;

        container.append(candidateCard);
    });

    console.log("huk huk",candidates)


    $(document).on("click", ".viewProfile", function (event) {
        event.preventDefault();

        let candidateID = $(this).data("cand-id");
        localStorage.setItem("candId", candidateID);

        console.log("Stored Candidate ID:", candidateID);
        window.location.href = "candidate-detail.html";
    });

}