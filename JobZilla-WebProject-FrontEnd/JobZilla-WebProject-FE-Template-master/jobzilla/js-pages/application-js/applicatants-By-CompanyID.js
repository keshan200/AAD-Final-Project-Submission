$(document).ready(function () {
    const companyId = localStorage.getItem("loggedCompanyId");
    const authToken = localStorage.getItem("authToken");

    console.log("Logged Company ID:", companyId);

    $.ajax({
        url: `http://localhost:8080/api/v1/application/company/${companyId}`,
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + authToken
        },
        success: (res) => {
            console.log(res);

            if (res.length === 0) {
                $("#applicationTableBody").html('<tr><td colspan="6">No applications available</td></tr>');
            }


            res.forEach(application => {
                const statusClass = application.status === "APPROVED" ? "twm-bg-green" : "twm-bg-red";
                const statusLabel = application.status.charAt(0).toUpperCase() + application.status.slice(1).toLowerCase();

                const row = `
                <tr>
                    <td><input type="checkbox"></td>
                    <td>
                        <div class="twm-DT-candidates-list">
                            <div class="twm-media">
                                <div class="twm-media-pic">
                                    <img src="images/candidates/pic1.jpg" alt="${application.candidate?.name || "Candidate"}">
                                </div>
                            </div>
                            <div class="twm-mid-content">
                                <a href="#" class="twm-job-title">
                                    <h4>${application.candidate?.name || "Candidate Name"}</h4>
                                    <p class="twm-candidate-address">
                                        <i class="feather-map-pin"></i> ${application.candidate.country}
                                    </p>
                                </a>
                            </div>
                        </div>
                    </td>
                    <td>${application.job.jobTitle}</td>
                    <td>${application.date}</td>
                    <td>
                        <div class="twm-jobs-category">
                            <span class="${statusClass}">${statusLabel}</span>
                        </div>
                    </td>
                    <td>
                        <div class="twm-table-controls">
                            <ul class="twm-DT-controls-icon list-unstyled">
                                <li>
                                     <a href="${application.resume}" target="_blank" download title="View and Download Resume" data-bs-toggle="tooltip" data-bs-placement="top">
                                        <span class="fa fa-eye"></span>
                                    </a>
                                </li>
                                <li>
                                    <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                        <span class="far fa-envelope-open"></span>
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


                $("#applicationTableBody").append(row);
            });
        },
        error: (error) => {
            console.error("Error fetching applications:", error);
        }
    });
});
