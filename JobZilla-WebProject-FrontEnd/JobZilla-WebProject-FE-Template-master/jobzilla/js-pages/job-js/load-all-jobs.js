$(document).ready(function () {

    $.ajax({

        url:"http://localhost:8080/api/v1/job/getAll",
        method:"GET",

        success:(response)=>{
            console.log("job response",response)
            response.forEach(job =>{

                console.log("Job Object:", job);
                console.log("Job ID:", job.jobId);




                let container = $(".job_container_head");
                let baseURL = "http://localhost:8080/uploads/";
                let companyLogo = job.company && job.company.logo_img
                    ? `${baseURL}${job.company.logo_img}`
                    : "images/jobs-company/default-logo.jpg";

                let jobDetailsHTML =

                    `<div class="twm-jobs-list-wrap">
                                <ul>
                                     <li>
                                         <div class="twm-jobs-list-style1 mb-5">
                                             <div class="twm-media">
                                                 <img src="${companyLogo}" alt="#">
                                             </div>
                                             <div class="twm-mid-content">
                                                 <a  class="twm-job-title tit" data-j-id="${job.jobId}">
                                                     <h4>${job.jobTitle}<span class="twm-job-post-duration">/ 1 days ago</span></h4>
                                                 </a>
                                                 <p class="twm-job-address">${job.fulladdress}</p>
                                                 <a href="https://themeforest.net/user/thewebmax/portfolio" class="twm-job-websites site-text-primary">${job.website}</a>
                                             </div>
                                             <div class="twm-right-content">
                                                 <div class="twm-jobs-category green"><span class="twm-bg-green">New</span></div>
                                                 <div class="twm-jobs-amount">${job.offeredSalary}<span>/ Month</span></div>
                                                 <a href="job-detail.html" class="twm-jobs-browse site-text-primary tit">Browse Job</a>
                                             </div>
                                         </div>
                                     </li>
                                </ul>
                            </div> `

                container.append(jobDetailsHTML)

            })





        },


        error:(err)=>{
            console.error("chora")
        }



    })




    $(document).on("click", ".tit", function (event) {
        event.preventDefault();

        let jobId = $(this).data("j-id");
        localStorage.setItem("jId", jobId);
        console.log("job ID>>>>>",jobId)

        console.log("Stored job ID:", jobId);
        window.location.href = "job-detail.html";
    });

})