$(document).ready(function () {

    let originalContent = $(".job_container_head").html();

    $('#searchForm').on('input change', 'input, select', function () {
        const category = $('#category').val();
        const keyword = $('#keyword').val().trim().toLowerCase();
        const location = $('#location').val();

        console.log("kewordd",keyword)

        $.ajax({
            url: 'http://localhost:8080/api/v1/job/search-page',
            method: 'GET',

            data: {

                keyword: keyword || "",

                location: location || "",
                type: []
            },
            success: (res) =>{
                $(".job_container_head").empty()
                $('#results').empty();
                console.log("job response",res)

                if (res && res.length > 0) {
                    res.forEach(job => {
                        console.log("Job Object:", job);

                        let container = $("#results");
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


                }else{

                    $(".job_container_head").html(originalContent);
                    $('#results').append('<p>No jobs found</p>');
                }

            },
            error: function (xhr) {
                if (xhr.status === 204) {
                    $('#results').empty().append('<p>No jobs found</p>');
                } else {
                    console.error('Error fetching jobs:', xhr);
                }
            }
        });
    });


});

/*
$(document).ready(function () {

    const category = $('#category').val();
    const keyword = $('#keyword').val()
    const location = $('#location').val();

    $.ajax({
        url: `http://localhost:8080/api/v1/job/search-page`,
        type: "GET",
        data: {


            keyword: "software engineer",


        },
        success: function (response) {
            console.log("Job response new:", response);

            if (response && response.length > 0) {
                // Process and display the response data
                response.forEach(job => {
                    console.log("Job Title:", job.jobTitle);
                });
            } else {
                console.log("Job response undefined or empty");
            }
        },
        error: function (xhr, status, error) {
            console.error("AJAX Error:", status, error);
            console.log("Response Text:", xhr.responseText);
        }
    });
});
*/
