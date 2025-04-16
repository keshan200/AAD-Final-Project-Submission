$(document).ready(function () {
    $.ajax({
        url: "http://localhost:8080/api/v1/company/getAll",
        method: "GET",
        success: function (response) {
            loadCompanies(response);
            console.log("company set eka",response)
        },
        error: function (xhr) {
            console.error("Error:", xhr.responseText);
        }
    });
});




function loadCompanies(companies) {
    let container = $(".companies-container");
    container.empty();
    console.log("comp",companies)


    companies.forEach(company => {
        console.log("logo image",company.logo_img)
        let companyCard =
                      ` <div class="twm-employer-list-wrap">
                                <ul>
                                     <li>
                                         <div class="twm-employer-list-style1 mb-5">
                                             <div class="twm-media">
                                                 <img src="${company.logo_img}" alt="#">
                                             </div>
                                             <div class="twm-mid-content">
                                                 <a  class="tit twm-job-title"  data-cid="${company.cid}">
                                                     <h4>${company.company_name}</h4>
                                                 </a>
                                                 <p class="twm-job-address">${company.full_address}</p>
                                                 <a href="employer-detail.html" class="twm-job-websites site-text-primary">${Accountancy}</a>
                                             </div>
                                             <div class="twm-right-content">
                                                 <div class="twm-jobs-vacancies"><span>available</span>Vacancies</div>
                                             </div>
                                         </div>
                                     </li>
                                </ul>
                            </div>`;

                         container.append(companyCard);
    });

     console.log("pak pak",companies)


    $(document).on("click", ".tit", function (event) {
        event.preventDefault();

        let companyId = $(this).data("cid");
        localStorage.setItem("cid", companyId);

        console.log("Stored Company ID:", companyId);
        window.location.href = "employer-detail-v2.html";
    });

}
