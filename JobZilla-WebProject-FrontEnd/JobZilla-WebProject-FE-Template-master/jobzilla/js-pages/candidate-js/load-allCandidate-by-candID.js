

$(document).ready( ()=> {

    let candidateId = localStorage.getItem("candId")
    console.log(">>>>>",candidateId)


    $.ajax({
        url:`http://localhost:8080/api/v1/candidate/getCandidateByCandId/${candidateId}`,
        method:"GET",


        success:(response)=>{
            loadCandidates(response)
        },

        error:(error)=>{
            console.error("Error:", error.responseText);
        }

    })
})


function loadCandidates(candidates) {

    let container = $(".candidate-container-v2");
    container.empty();

    console.log("candidate set eka",candidates)

    candidates.forEach(cand => {

        let imgSrc = cand.img && cand.img.startsWith("data:image")
            ? cand.img // Base64 string
            : cand.img && cand.img.trim() !== ""
                ? `http://localhost:8080/uploads/${cand.img}` // File path
                : "";

        let candidateDetails =
            `<div class="row d-flex justify-content-center">
                     
                     <style>
                     .message-icon-container {
            display: inline-flex;
            align-items: center;
            background-color: #3a66db;
            color: white;
            padding: 8px 16px;
            border-radius: 24px;
            cursor: pointer;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            transition: all 0.2s ease;
        }

        .message-icon-container:hover {
            background-color: #2a56cb;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }

        .message-icon {
            width: 24px;
            height: 24px;
            margin-right: 8px;
        }

        .message-text {
            font-size: 14px;
            font-weight: bold;
        }

        /* SVG styles for the message icon */
        .message-bubble {
            fill: white;
        }
</style>
                 
                            <div class="col-lg-8 col-md-12">
                                <!-- Candidate detail START -->
                                <div class="cabdidate-de-info">
                                    <div class="twm-candi-self-wrap overlay-wraper" style="background-image:url(//candidate-bg.jpg);">
                                        <div class="overlay-main site-bg-primary opacity-01"></div>
                                        <div class="twm-candi-self-info">
                                            <div class="twm-candi-self-top">
                                                <div class="twm-candi-fee"> </div>
                                                <div class="twm-media">
                                                    <img src="${imgSrc}" alt="#">
                                                </div>
                                                <div class="twm-mid-content">

                                                    <h4 class="twm-job-title">${cand.name}</h4>

                                                    <p>Senior UI / UX Designer and Developer at Google INC</p>
                                                    <p class="twm-candidate-address"><i class="feather-map-pin"></i>${cand.country}</p>

                                                </div>
                                            </div>
                                            <div class="twm-candi-self-bottom">
                                                <a href="javascript:;" class="site-button outline-white">Hire Me Now</a>
                                                
                                                <div class="message-icon-container">
                                                     <svg class="message-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                       <path class="message-bubble" d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z"/>
                                                      </svg>
                                                  <span class="message-text">Message</span>
                                                     </div>
                                                     
                                                     
                                                     
                                                <a href="javascript:;" class="site-button secondry">Download CV</a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <h4 class="twm-s-title">About Me</h4>

                                    <p>${cand.description}</p>

                              
                    
                                    <h4 class="twm-s-title">Skills</h4>

                                    <div class="tw-sidebar-tags-wrap"  >
                                        <div class="tagcloud" id="skillsContainer-${cand.cand_id}">
                                       
                                       </div>
                                    </div>

                                    <h4 class="twm-s-title">Work Experience</h4>
                                    <div class="twm-timing-list-wrap">

                                        <div class="twm-timing-list">
                                            <div class="twm-time-list-date">2012 to 2016</div>
                                            <div class="twm-time-list-title">Bluetech, Inc</div>
                                            <div class="twm-time-list-position">Senior PHP Developer</div>
                                            <div class="twm-time-list-discription">
                                                <p>One of the main areas that I work on with my clients is shedding these non-supportive beliefs and
                                                    replacing them with beliefs that will help them to accomplish their desires.</p>
                                            </div>
                                        </div>

                                        <div class="twm-timing-list">
                                            <div class="twm-time-list-date">2016 to 2020</div>
                                            <div class="twm-time-list-title">Amazon, Inc</div>
                                            <div class="twm-time-list-position">IT & Development</div>
                                            <div class="twm-time-list-discription">
                                                <p>One of the main areas that I work on with my clients is shedding these non-supportive beliefs and
                                                    replacing them with beliefs that will help them to accomplish their desires.</p>
                                            </div>
                                        </div>

                                        <div class="twm-timing-list">
                                            <div class="twm-time-list-date">2020 to 2023</div>
                                            <div class="twm-time-list-title">BGoogle, Inc</div>
                                            <div class="twm-time-list-position">Senior UI / UX Designer and Developer </div>
                                            <div class="twm-time-list-discription">
                                                <p>One of the main areas that I work on with my clients is shedding these non-supportive beliefs and
                                                    replacing them with beliefs that will help them to accomplish their desires.</p>
                                            </div>
                                        </div>

                                    </div>

                                    <h4 class="twm-s-title">Education & Training</h4>
                                    <div class="twm-timing-list-wrap">

                                        <div class="twm-timing-list">
                                            <div class="twm-time-list-date">2004 to 2006</div>
                                            <div class="twm-time-list-title">BCA - Bachelor of Computer Applications</div>
                                            <div class="twm-time-list-position">International University</div>
                                            <div class="twm-time-list-discription">
                                                <p>One of the main areas that I work on with my clients is shedding these non-supportive beliefs and
                                                    replacing them with beliefs that will help them to accomplish their desires.</p>
                                            </div>
                                        </div>

                                        <div class="twm-timing-list">
                                            <div class="twm-time-list-date">2006 to 2008</div>
                                            <div class="twm-time-list-title">MCA - Master of Computer Application</div>
                                            <div class="twm-time-list-position">Middle East Technical University</div>
                                            <div class="twm-time-list-discription">
                                                <p>One of the main areas that I work on with my clients is shedding these non-supportive beliefs and
                                                    replacing them with beliefs that will help them to accomplish their desires.</p>
                                            </div>
                                        </div>

                                        <div class="twm-timing-list">
                                            <div class="twm-time-list-date">2008 to 2011</div>
                                            <div class="twm-time-list-title">Design Communication Visual</div>
                                            <div class="twm-time-list-position">Design at Massachusetts Institute of Technology & Marketing</div>
                                            <div class="twm-time-list-discription">
                                                <p>One of the main areas that I work on with my clients is shedding these non-supportive beliefs and
                                                    replacing them with beliefs that will help them to accomplish their desires.</p>
                                            </div>
                                        </div>

                                    </div>


                                </div>

                            </div>

                            <div class="col-lg-4 col-md-12 rightSidebar">

                                <div class="side-bar-2">

                                    <div class="twm-s-map mb-5">
                                        <h4 class="section-head-small mb-4">Location</h4>
                                        <div class="twm-s-map-iframe">
                                            <iframe height="270" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8534521658976!2d-118.2533646842856!3d34.073270780600225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6fd9829c6f3%3A0x6ecd11bcf4b0c23a!2s1363%20Sunset%20Blvd%2C%20Los%20Angeles%2C%20CA%2090026%2C%20USA!5e0!3m2!1sen!2sin!4v1620815366832!5m2!1sen!2sin"></iframe>
                                        </div>
                                    </div>


                                    <div class="twm-s-info-wrap mb-5">
                                        <h4 class="section-head-small mb-4">Profile Info</h4>
                                        <div class="twm-s-info">
                                            <ul>

                                                <li>
                                                    <div class="twm-s-info-inner">
                                                        <i class="fas fa-money-bill-wave"></i>
                                                        <span class="twm-title">Country</span>
                                                        <div class="twm-s-info-discription">${cand.country}</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="twm-s-info-inner">
                                                        <i class="fas fa-clock"></i>
                                                        <span class="twm-title">Experience</span>
                                                        <div class="twm-s-info-discription">6 Year</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="twm-s-info-inner">
                                                        <i class="fas fa-venus-mars"></i>
                                                        <span class="twm-title">Gender</span>
                                                        <div class="twm-s-info-discription">${cand.gender}</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="twm-s-info-inner">
                                                        <i class="fas fa-mobile-alt"></i>
                                                        <span class="twm-title">Phone</span>
                                                        <div class="twm-s-info-discription">${cand.user.mobile}</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="twm-s-info-inner">
                                                        <i class="fas fa-at"></i>
                                                        <span class="twm-title">Email</span>
                                                        <div class="twm-s-info-discription">${cand.user.email}</div>
                                                    </div>
                                                </li>
                                            
                                                <li>
                                                    <div class="twm-s-info-inner">

                                                        <i class="fas fa-map-marker-alt"></i>
                                                        <span class="twm-title">Address</span>
                                                        <div class="twm-s-info-discription">${cand.full_address}</div>
                                                    </div>
                                                </li>

                                            </ul>

                                        </div>
                                    </div>

                                    <div class="twm-s-contact-wrap mb-5">
                                        <h4 class="section-head-small mb-4">Contact us</h4>
                                        <div class="twm-s-contact">
                                            <div class="row">

                                                <div class="col-lg-12">
                                                    <div class="form-group mb-3">
                                                        <input name="username" type="text" required class="form-control" placeholder="Name">
                                                    </div>
                                                </div>

                                                <div class="col-lg-12">
                                                    <div class="form-group mb-3">
                                                        <input name="email" type="text" class="form-control" required placeholder="Email">
                                                    </div>
                                                </div>

                                                <div class="col-lg-12">
                                                    <div class="form-group mb-3">
                                                        <input name="phone" type="text" class="form-control" required placeholder="Phone">
                                                    </div>
                                                </div>


                                                <div class="col-lg-12">
                                                    <div class="form-group mb-3">
                                                        <textarea name="message" class="form-control" rows="3" placeholder="Message"></textarea>
                                                    </div>
                                                </div>

                                                <div class="col-md-12">
                                                    <button type="submit" class="site-button">Submit Now</button>
                                                </div>

                                            </div>

                                        </div>
                                    </div>


                                </div>


                            </div>

                        </div> `;

        container.append(candidateDetails);


        let skillsContainer = $(`#skillsContainer-${cand.cand_id}`);
        if (cand.skills && cand.skills.length > 0) {
            cand.skills.forEach(skill => {
                skillsContainer.append(`<a href="javascript:void(0)">${skill}</a>`);
            });
        } else {
            skillsContainer.append("<span>No skills listed</span>");
        }
    });



}