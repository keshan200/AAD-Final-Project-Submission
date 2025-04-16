/*$(document).ready(function () {

    let loggedInUserId = localStorage.getItem("loggedUser");
    let authToken = localStorage.getItem("authToken");

    console.log("Auth Token:", authToken);
    console.log("Logged-in User ID:", loggedInUserId);

    $.ajax({
        url: `http://localhost:8080/api/v1/company/user/${loggedInUserId}`,
        method: "GET",
        headers: {
            "Authorization": "Bearer " + authToken
        },
        success: (response) => {
            response.forEach(company2 => {
                let companyID = company2.cid;
                console.log(">>>>>Company ID:", companyID);

                $.ajax({
                    url: `http://localhost:8080/api/v1/job/company/${companyID}`,
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + authToken
                    },
                    success: (jobResponse) => {
                        console.log("job set eka", jobResponse);


                        let jobHtml = '';
                        jobResponse.forEach(job => {
                            const imageUrl = `http://localhost:8080/uploads/${job.company.logo_img}`;
                            jobHtml += `
                                <tr>
                                    <td>
                                        <div class="twm-bookmark-list">
                                            <div class="twm-media">
                                                <div class="twm-media-pic">
                                                    <img src="${imageUrl}" alt="#">
                                                </div>
                                            </div>
                                            <div class="twm-mid-content">
                                                <a href="#" class="twm-job-title">
                                                    <h4>${job.jobTitle}</h4>
                                                    <p class="twm-bookmark-address">
                                                        <i class="feather-map-pin"></i>${job.fulladdress}
                                                    </p>
                                                </a>

                                            </div>

                                        </div>
                                    </td>
                                    <td>${job.jobCategory}</td>
                                    <td><div class="twm-jobs-category"><span class="twm-bg-green">${job.jobType}</span></div></td>
                                    <td><a href="javascript:;" class="site-text-primary">03 Applied</a></td>
                                    <td>
                                        <div>${job.startDate}</div>
                                        <div>${job.endDate}</div>
                                    </td>
                                    <td>
                                        <div class="twm-table-controls">
                                            <ul class="twm-DT-controls-icon list-unstyled">
                                                <li>
                                                    <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                        <span class="fa fa-eye"></span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button title="Edit" data-bs-toggle="tooltip" data-bs-placement="top">
                                                        <span class="far fa-edit"></span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                        <span class="far fa-trash-alt"></span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>

                                </tr>
                            `;
                        });

                        $(".tr").html(jobHtml);
                    },
                    error: function (xhr) {
                        console.log("Error fetching job data:")
                    }
                });
            });
        },
        error: (error) => {
            console.log("Error fetching company data:")
        }
    });
});*/





let loggedInUserId = localStorage.getItem("loggedUser");
let authToken = localStorage.getItem("authToken");

console.log("Auth Token:", authToken);
console.log("Logged-in User ID:", loggedInUserId);


$.ajax({
    url: `http://localhost:8080/api/v1/company/user/${loggedInUserId}`,
    method: "GET",
    headers: {
        "Authorization": "Bearer " + authToken
    },
    success: (response) => {

        if (Array.isArray(response) && response.length > 0) {
            response.forEach(company2 => {
                let companyID = company2.cid;
                console.log(">>>>>Company ID:", companyID);
                localStorage.setItem("loggedCompanyId",companyID)

                $.ajax({
                    url: `http://localhost:8080/api/v1/job/company/${companyID}`,
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + authToken
                    },
                    success: (jobResponse) => {
                        console.log("job set eka", jobResponse);

                        let jobHtml = '';

                        if (Array.isArray(jobResponse) && jobResponse.length > 0) {
                            jobResponse.forEach(job => {
                                const imageUrl = `http://localhost:8080/uploads/${job.company.logo_img}`;
                                jobHtml += `
                                    <tr>
                                        <td>
                                            <div class="twm-bookmark-list">
                                                <div class="twm-media">
                                                    <div class="twm-media-pic">
                                                        <img src="${imageUrl}" alt="#">
                                                    </div>
                                                </div>
                                                <div class="twm-mid-content">
                                                    <a href="#" class="twm-job-title">
                                                        <h4>${job.jobTitle}</h4>
                                                        <p class="twm-bookmark-address">
                                                            <i class="feather-map-pin"></i>${job.fulladdress}
                                                        </p>
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                        <td>${job.jobCategory}</td>
                                        <td><div class="twm-jobs-category"><span class="twm-bg-green">${job.jobType}</span></div></td>
                                        <td><a href="javascript:;" class="site-text-primary">03 Applied</a></td>
                                        <td>
                                            <div>${job.startDate}</div>
                                            <div>${job.endDate}</div>
                                        </td>
                                        <td>
                                            <div class="twm-table-controls">
                                                <ul class="twm-DT-controls-icon list-unstyled">
                                                    <li>
                                                        <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                            <span class="fa fa-eye"></span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button title="Edit" data-bs-toggle="tooltip" data-bs-placement="top">
                                                            <span class="far fa-edit"></span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                            <span class="far fa-trash-alt"></span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                `;
                            });
                            $(".tr").html(jobHtml);
                        } else {
                            console.log("No jobs found for this company.");
                        }
                    },
                    error: function (xhr) {
                        console.log("Error fetching job data:", xhr);
                    }
                });
            });
        } else {
            console.log("No companies found for the logged-in user.");
        }
    },
    error: (error) => {
        console.log("Error fetching company data:", error);
    }
});
