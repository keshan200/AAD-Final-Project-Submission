$(document).ready(function () {
    console.log("Element Exists:", $(".job_container_head").length > 0);


    let searchParams = getQueryParams();
    console.log("Search Params:", searchParams);

    if (searchParams.jobTitle || searchParams.jobType || searchParams.location) {
        $.ajax({
            url: "http://localhost:8080/api/v1/job/search",
            method: "GET",
            data: {
                jobTitle: searchParams.jobTitle,
                jobType: searchParams.jobType,
                country: searchParams.location
            },
            success: (response) => {


                setTimeout(() => {
                    $(".job_container_head").empty();
                    console.log("After Forced Empty:", $(".job_container_head").html());
                }, 200);




                if (response.data && response.data.length > 0) {
                    response.data.forEach(job => {
                        console.log("Job Object:", job);

                        let container = $(".filter-jobs");
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
                                                  <a class="twm-job-title tit" data-j-id="${job.jobId}">
                                                      <h4>${job.jobTitle}<span class="twm-job-post-duration">/ 1 days ago</span></h4>
                                                  </a>
                                                  <p class="twm-job-address">${job.fulladdress}</p>
                                                  <a href="${job.website}" class="twm-job-websites site-text-primary">${job.website}</a>
                                              </div>
                                              <div class="twm-right-content">
                                                  <div class="twm-jobs-category green"><span class="twm-bg-green">New</span></div>
                                                  <div class="twm-jobs-amount">${job.offeredSalary}<span>/ Month</span></div>
                                                  <a href="job-detail.html" class="twm-jobs-browse site-text-primary tit">Browse Job</a>
                                              </div>
                                          </div>
                                      </li>
                                 </ul>
                             </div>`;

                        container.append(jobDetailsHTML);
                    });
                } else {
                    $(".filter-jobs").html("<p>No jobs found for the provided search criteria.</p>");
                }
            },
            error: (err) => {
                console.error("Error fetching jobs:", err);
                $(".filter-jobs").html("<p>Error occurred while fetching jobs. Please try again later.</p>");
            }
        });
    }
});


function getQueryParams() {
    let params = {};
    let queryString = window.location.search.substring(1);
    let queryArray = queryString.split("&");

    queryArray.forEach(function (query) {
        let pair = query.split("=");
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
    });

    return params;
}
