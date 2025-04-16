$(document).ready(function () {

    const companyId = localStorage.getItem("cid");
    console.log("hutti",companyId)

   $.ajax({
       url:`http://localhost:8080/api/v1/company/all/${companyId}`,
       method:'GET',

       success:(response)=>{

           let container = $(".container_head");
           console.log("red",response)

           response.forEach(company => {

               $('#name').val(company.company_name);
               $('#tel').val(company.company_phone);
               $('#email').val(company.company_Email);
               $('#website').val(company.website);
               $('#est').val(company.est_since);
               $('#country').val(company.country);
               $('#city').val(company.city);
               $('#postcode')
               $('#fulladrs').val(company.full_address);
               $('#desc').val(company.description);


               console.log("com IMg",company.logo_img)
                let companyDetailsHtml =

                   `<div class="page-content">

                                    <!-- Employer Detail START -->
                                    <div class="section-full  p-t0 p-b90 bg-white">
                                              <!--Top Wide banner Start-->
                                              <div class="twm-top-wide-banner overlay-wraper" style="background-image:url(../../images/detail-pic/company-bnr1.jpg);">
                    <div class="overlay-main site-bg-primary opacity-09"></div>
                    
                    <div class="twm-top-wide-banner-content container ">

                        <div class="twm-mid-content">
                            <div class="twm-employer-self-top">
                                <div class="twm-media">
                                  <img src="http://localhost:8080/uploads/${company.logo_img}" alt="Company Logo">
                                </div>

                                <h3 class="twm-job-title">${company.company_name}</h3>
                                <p class="twm-employer-address"><i class="feather-map-pin"></i>${company.full_address}</p>

                                <a href="https://themeforest.net/user/thewebmax/portfolio" class="twm-employer-websites">${company.website}</a>

                                <a class="btn message-btn" href="javascript:void(0)" style="background-color: #000; color: #fff;border-radius: 10px;margin-bottom: 28px">
                                     <i class="fa fa-comment"></i> Message
                                    </a>


                                <div class="twm-ep-detail-tags">
                                    <button class="de-info twm-bg-green"><i class="fa fa-check"></i> Verified</button>
                                    <button class="de-info twm-bg-brown"><i class="fa fa-heart"></i> Add To Favorite</button>
                                    <button class="de-info twm-bg-purple"><i class="fa fa-hand-o-right"></i> Add Review</button>
                                    <button class="de-info twm-bg-sky"><i class="fa fa-eye"></i> Viewed</button>
                                </div>
                                

                            </div>

                            <div class="twm-employer-self-bottom">
                                <div class="twm-social-btns">
                                    <a class="btn facebook" href="javascript:void(0)"><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn twitter" href="javascript:void(0)"><i class="fab fa-twitter"></i></a>
                                    <a class="btn google" href="javascript:void(0)"><i class="fab fa-google"></i></a>
                                    <a class="btn linkedin" href="javascript:void(0)"><i class="fab fa-linkedin-in"></i></a>
                                    <a class="btn skype" href="javascript:void(0)"><i class="fab fa-skype"></i></a>
                                </div>
                                <div class="twm-employer-btn-controls">
                                    <a href="javascript:;" class="site-button outline-white">Add Review</a>
                                    <a href="javascript:;" class="site-button secondry">Follow Us</a>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="ani-circle-1 rotate-center"></div>
                    <div class="ani-circle-2 rotate-center"></div>
                        
                </div>
          
          <!--Top Wide banner End-->
        <div class="container">
                    <div class="section-content">
                        <div class="row d-flex justify-content-center">

                            <div class="col-lg-4 col-md-12 rightSidebar">

                                <div class="side-bar-2">

                                    <div class="twm-s-info-wrap mb-5">
                                        <h4 class="section-head-small mb-4">Profile Info</h4> 
                                        <div class="twm-s-info-3">
                                            <ul>

                                                <li>
                                                    <div class="twm-s-info-inner">
                                                        <i class="fas fa-money-bill-wave"></i>
                                                        <span class="twm-title">Country</span>
                                                        <div class="twm-s-info-discription">${company.country}</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="twm-s-info-inner">
                                                        <i class="fas fa-clock"></i>
                                                        <span class="twm-title">Est.Since</span>
                                                        <div class="twm-s-info-discription">${company.est_since}</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="twm-s-info-inner">
                                                        <i class="fas fa-venus-mars"></i>
                                                        <span class="twm-title">City</span>
                                                        <div class="twm-s-info-discription">${company.city}</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="twm-s-info-inner">
                                                        <i class="fas fa-mobile-alt"></i>
                                                        <span class="twm-title">Phone</span>
                                                        <div class="twm-s-info-discription">${company.user.mobile}</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="twm-s-info-inner">
                                                        <i class="fas fa-at"></i>
                                                        <span class="twm-title">Email</span>
                                                        <div class="twm-s-info-discription">${company.user.email}</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="twm-s-info-inner">
                                                        <i class="fas fa-book-reader"></i>
                                                        <span class="twm-title">Qualification</span>
                                                        <div class="twm-s-info-discription">Developer</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="twm-s-info-inner">
                                                        
                                                        <i class="fas fa-map-marker-alt"></i>
                                                        <span class="twm-title">Address</span>
                                                        <div class="twm-s-info-discription">${company.full_address}</div>
                                                    </div>
                                                </li>

                                            </ul>
                                            
                                        </div>
                                    </div>
    
                                    <div class="twm-s-map mb-5">
                                        <h4 class="section-head-small mb-4">Location</h4> 
                                        <div class="twm-s-map-iframe twm-s-map-iframe-2">
                                            <iframe height="270" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8534521658976!2d-118.2533646842856!3d34.073270780600225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6fd9829c6f3%3A0x6ecd11bcf4b0c23a!2s1363%20Sunset%20Blvd%2C%20Los%20Angeles%2C%20CA%2090026%2C%20USA!5e0!3m2!1sen!2sin!4v1620815366832!5m2!1sen!2sin"></iframe>
                                        </div>
                                    </div>

                                    <div class="twm-s-contact-wrap mb-5">
                                        <h4 class="section-head-small mb-4">Contact us</h4> 
                                        <div class="twm-s-contact twm-s-contact-2">
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
                        
                            <div class="col-lg-8 col-md-12">
                                <!-- Candidate detail START -->
                                <div class="cabdidate-de-info">

                                    <h4 class="twm-s-title m-t0">About Company</h4>

                                    <p>${company.description}</p>
                                    
                              
                                    
                                  <!--  <div class="twm-two-part-section">
                                        <div class="row">


                                            &lt;!&ndash;video gallery&ndash;&gt;
                                            <div class="col-lg-12 col-md-12 m-b30">
                                                <h4 class="twm-s-title">Video</h4>
                                                <div class="video-section-first" style="background-image: url(../../images/video-bg.jpg);">
                                                    <a href="https://www.youtube.com/watch?v=c1XNqw2gSbU" class="mfp-video play-now-video">
                                                        <i class="icon feather-play"></i>
                                                        <span class="ripple"></span>
                                                    </a>
                                                </div> 
                                            </div>

                                            &lt;!&ndash;image galery&ndash;&gt;
                                           &lt;!&ndash; <div class="col-lg-12 col-md-12">
                                                <h4 class="twm-s-title">Office Photos</h4>
                                                <div class="tw-sidebar-gallery-2">
                                                    <div class="row">
                                                        <div class="col-lg-3 col-md-3">
                                                            <div class="tw-service-gallery-thumb">
                                                                <a class="elem" href="images/gallery/pic1.jpg" title="Title 1" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic1.jpg">
                                                                    <img src="images/gallery/thumb/pic1.jpg" alt="">
                                                                    <i class="fa fa-file-image"></i>     
                                                                </a>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="col-lg-3 col-md-3">
                                                            <div class="tw-service-gallery-thumb">
                                                                <a class="elem" href="images/gallery/pic2.jpg" title="Title 2" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic2.jpg">
                                                                    <img src="images/gallery/thumb/pic2.jpg" alt="">
                                                                    <i class="fa fa-file-image"></i>     
                                                                </a>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="col-lg-3 col-md-3">
                                                            <div class="tw-service-gallery-thumb ">
                                                                <a class="elem" href="images/gallery/pic3.jpg" title="Title 3"  data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic3.jpg">
                                                                    <img src="images/gallery/thumb/pic3.jpg" alt="">
                                                                    <i class="fa fa-file-image"></i>     
                                                                </a>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="col-lg-3 col-md-3">
                                                            <div class="tw-service-gallery-thumb">
                                                                <a class="elem" href="images/gallery/pic4.jpg" title="Title 4"  data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic4.jpg">
                                                                    <img src="images/gallery/thumb/pic4.jpg" alt="">
                                                                    <i class="fa fa-file-image"></i>     
                                                                </a>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="col-lg-3 col-md-3">
                                                            <div class="tw-service-gallery-thumb">
                                                                <a class="elem" href="images/gallery/pic5.jpg" title="Title 5"  data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic5.jpg">
                                                                    <img src="images/gallery/thumb/pic5.jpg" alt="">
                                                                    <i class="fa fa-file-image"></i>     
                                                                </a>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="col-lg-3 col-md-3">
                                                            <div class="tw-service-gallery-thumb">
                                                                <a class="elem" href="images/gallery/pic6.jpg" title="Title 6"  data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic6.jpg">
                                                                    <img src="images/gallery/thumb/pic6.jpg" alt="">
                                                                    <i class="fa fa-file-image"></i>     
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div class="col-lg-3 col-md-3">
                                                            <div class="tw-service-gallery-thumb">
                                                                <a class="elem" href="images/gallery/pic7.jpg" title="Title 7" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic1.jpg">
                                                                    <img src="images/gallery/thumb/pic7.jpg" alt="">
                                                                    <i class="fa fa-file-image"></i>     
                                                                </a>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="col-lg-3 col-md-3">
                                                            <div class="tw-service-gallery-thumb">
                                                                <a class="elem" href="images/gallery/pic8.jpg" title="Title 8" data-lcl-author="" data-lcl-thumb="images/gallery/thumb/pic2.jpg">
                                                                    <img src="images/gallery/thumb/pic8.jpg" alt="">
                                                                    <i class="fa fa-file-image"></i>     
                                                                </a>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                    </div>
                
                                                </div> 
                                            </div>&ndash;&gt;

                                        </div>
                                    </div>-->

                                    <h4 class="twm-s-title">Available Jobs</h4>
                                    <div class="twm-jobs-list-wrap">
                                        <div class="row">
                                            <!--Block one-->
                                            <div class="col-lg-6 col-md-12 m-b30">
            
                                                <div class="twm-jobs-grid-style1">
                                                    <div class="twm-media">
                                                        <img src="images/jobs-company/pic1.jpg" alt="#">
                                                    </div>
                                                    <span class="twm-job-post-duration">1 days ago</span>
                                                    <div class="twm-jobs-category green"><span class="twm-bg-green">New</span></div>
                                                    <div class="twm-mid-content">
                                                        <a href="job-detail.html" class="twm-job-title">
                                                            <h4>Senior Web Designer , Developer</h4>
                                                        </a>
                                                        <p class="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                                        <a href="https://themeforest.net/user/thewebmax/portfolio" class="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                                    </div>
                                                    <div class="twm-right-content">
                                                        
                                                        <div class="twm-jobs-amount">$2500 <span>/ Month</span></div>
                                                        <a href="job-detail.html" class="twm-jobs-browse site-text-primary">Browse Job</a>
                                                    </div>
                                                </div>
            
                                            </div>
                                            
                                            <!--Block two-->
                                            <div class="col-lg-6 col-md-12 m-b30">
            
                                                <div class="twm-jobs-grid-style1">
                                                    <div class="twm-media">
                                                        <img src="images/jobs-company/pic2.jpg" alt="#">
                                                    </div>
                                                    <span class="twm-job-post-duration">15 days ago</span>
                                                    <div class="twm-jobs-category green"><span class="twm-bg-brown">Intership</span></div>
                                                    <div class="twm-mid-content">
                                                        <a href="job-detail.html" class="twm-job-title">
                                                            <h4>Senior Rolling Stock Technician</h4>
                                                        </a>
                                                        <p class="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                                        <a href="https://themeforest.net/user/thewebmax/portfolio" class="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                                    </div>
                                                    <div class="twm-right-content">
                                                        <div class="twm-jobs-amount">$7 <span>/ Hour</span></div>
                                                        <a href="job-detail.html" class="twm-jobs-browse site-text-primary">Browse Job</a>
                                                    </div>
                                                </div>
            
                                            </div>
                                            
                                            <!--Block three-->
                                            <div class="col-lg-6 col-md-12 m-b30">
                                                
                                                <div class="twm-jobs-grid-style1">
                                                    <div class="twm-media">
                                                        <img src="images/jobs-company/pic3.jpg" alt="#">
                                                    </div>
                                                    <span class="twm-job-post-duration">6 Month ago</span>
                                                    <div class="twm-jobs-category green"><span class="twm-bg-purple">Fulltime</span></div>
                                                    <div class="twm-mid-content">
                                                        <a href="job-detail.html" class="twm-job-title">
                                                            <h4 class="twm-job-title">IT Department Manager</h4>
                                                        </a>
                                                        <p class="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                                        <a href="https://themeforest.net/user/thewebmax/portfolio" class="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                                    </div>
                                                    <div class="twm-right-content">
                                                        
                                                        <div class="twm-jobs-amount">$2500 <span>/ Month</span></div>
                                                        <a href="job-detail.html" class="twm-jobs-browse site-text-primary">Browse Job</a>
                                                    </div>
                                                </div> 
                                                 
                                            </div>
                                            
                                             <!--Block Four-->
                                            <div class="col-lg-6 col-md-12 m-b30">
            
                                                <div class="twm-jobs-grid-style1">
                                                    <div class="twm-media">
                                                        <img src="images/jobs-company/pic4.jpg" alt="#">
                                                    </div>
                                                    <span class="twm-job-post-duration">2 days ago</span>
                                                    <div class="twm-jobs-category green"><span class="twm-bg-sky">Freelancer</span></div>
                                                    <div class="twm-mid-content">
                                                        <a href="job-detail.html" class="twm-job-title">
                                                            <h4 class="twm-job-title">Art Production Specialist</h4>
                                                        </a>
                                                        <p class="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                                        <a href="https://themeforest.net/user/thewebmax/portfolio" class="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                                    </div>
                                                    <div class="twm-right-content">
                                                        
                                                        <div class="twm-jobs-amount">$1800 <span>/ Month</span></div>
                                                        <a href="job-detail.html" class="twm-jobs-browse site-text-primary">Browse Job</a>
                                                    </div>
                                                </div>
            
                                            </div>
                                                        
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
     </div>   
 <!-- Employer Detail END -->                                             
</div>`;

               container.append(companyDetailsHtml);
           });


       },

       error:(err)=>{


       }


   })

    })