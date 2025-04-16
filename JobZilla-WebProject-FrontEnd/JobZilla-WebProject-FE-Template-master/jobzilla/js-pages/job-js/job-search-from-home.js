$('#findJobButton').on('click', function () {
    var jobTitle = $('#j-Job_Title').val();
    var jobCategory = $('#j-All_Category').val();
    var location = $('#location').val();

    $.ajax({
        url: 'http://localhost:8080/api/v1/job/search',
        type: 'GET',
        data: {
            country: location,
            jobTitle: jobTitle,
            jobType: jobCategory
        },
        success: function (response) {
            if (response.data && response.data.length > 0) {
                window.location.href = 'job-list.html?jobTitle=' + encodeURIComponent(jobTitle) +
                    '&jobType=' + encodeURIComponent(jobCategory) +
                    '&location=' + encodeURIComponent(location);

                alert("sucsess")



            } else {
                alert('No jobs found for the provided search criteria.');
            }
        },
        error: function (xhr, status, error) {
            console.error("Error occurred while searching for jobs:", error);
            alert('Error occurred while searching for jobs. Please try again later.');
        }
    });
});
