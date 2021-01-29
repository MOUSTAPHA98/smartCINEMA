var contentDiv = document.getElementById("content");

async function GET_DATA_home() {
  
    // read API DATA
    let response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=0f483e0f9987fd0d89c1b0732ea93785&page=${Math.ceil(Math.random()*10)}`);
    let results = await response.json();
    let miniMoviesList = await results.results;

    // write data
    homePageContent = `
    <section class="homepage-area">
        <div class="homepage-content-swiper-container">
            <!-- Add Arrows -->
            <div class="homepage-content-swiper-button-next swiper-button-next swiper-pagination d-none d-md-flex">
                <i class="fal fa-chevron-right"></i>
            </div>
            <div class="homepage-content-swiper-button-prev swiper-button-prev swiper-pagination  d-none d-md-flex">
                <i class="fal fa-chevron-left"></i>
            </div>
            <!-- Add Pagination -->
            <div class="homepage-content-swiper-pagination swiper-pagination"></div>
    
            <div class="swiper-wrapper">
    
            <!--    ===     START SLIDE #01    ===    -->
                <div class="swiper-slide slide1">
                    <div class="slide-content">
                    <img class="d-none d-md-block" src="./src/images/deadpool.png" alt="">
                        <div class="row">
                            <div class="slide-movie col-xl-7 p-0 d-flex flex-column justify-content-center">
                                    <span class="slide-category">
                                        MOVIES
                                    </span>
                                    <h2 class="slide-movie-title">
                                        Deadpool
                                    </h2>
                                    <div class="slide-movie-genres d-flex flex-row align-items-center">
                                    <span>
                                        R
                                    </span>
                                    <span>
                                        action
                                    </span>
                                    <span>
                                        adventure
                                    </span>
                                    <span>
                                        comedy
                                    </span>
                                    </div>
                                    <div class="slide-movie-info d-flex flex-row align-items-center">
                                    <span class="slide-movie-info-rate">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fal fa-star"></i>
                                    </span>
                                    <span class="slide-movie-info-likes">
                                        <i class="fas fa-thumbs-up"></i>
                                        31565 Like
                                    </span>
                                    <span class="slide-movie-info-comments">
                                        <i class="fas fa-comment"></i>
                                        459 Comments
                                    </span>
                                    </div>
                                    <p class="slide-movie-description">
                                        A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.
                                    </p>
                                    <div class="slide-movie-btns d-flex flex-row justify-content-start align-items-center">
                                        <a class="btn">Watch Now</a>
                                        <a class="btn invert">view trailer</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--    ===     END SLIDE #01    ===    -->
    
                <!--    ===     START SLIDE #02    ===    -->
                <div class="swiper-slide slide2">
                <div class="slide-content">
                    <img class="d-none d-md-block" src="./src/images/ironman.png" alt="">
                    <div class="row">
                            <div class="slide-movie col-xl-7 p-0 d-flex flex-column justify-content-center">
                                <span class="slide-category">
                                    MOVIES
                                </span>
                                <h2 class="slide-movie-title">
                                    Iron Man
                                </h2>
                                <div class="slide-movie-genres d-flex flex-row align-items-center">
                                    <span>
                                        PG-13
                                    </span>
                                    <span>
                                        action
                                    </span>
                                    <span>
                                        adventure
                                    </span>
                                    <span>
                                        sci-fi
                                    </span>
                                </div>
                                <div class="slide-movie-info d-flex flex-row align-items-center">
                                    <span class="slide-movie-info-rate">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fal fa-star"></i>
                                        <i class="fal fa-star"></i>
                                    </span>
                                    <span class="slide-movie-info-likes">
                                        <i class="fas fa-thumbs-up"></i>
                                        31565 Like
                                    </span>
                                    <span class="slide-movie-info-comments">
                                        <i class="fas fa-comment"></i>
                                        459 Comments
                                    </span>
                                </div>
                                <p class="slide-movie-description">
                                    After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.
                                </p>
                                <div class="slide-movie-btns d-flex flex-row justify-content-start align-items-center">
                                    <a class="btn">Watch Now</a>
                                    <a class="btn invert">view trailer</a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <!--    ===     END SLIDE #02    ===    -->
    
            <!--    ===     START SLIDE #03    ===    -->
            <div class="swiper-slide slide3">
                <div class="slide-content">
                    <img class="d-none d-md-block" src="./src/images/marvel.png" alt="">
                    <div class="row">
                            <div class="slide-movie col-xl-12 p-0 d-flex flex-column justify-content-center">
                                <span class="slide-category">
                                    MOVIES
                                </span>
                                <h2 class="slide-movie-title">
                                    Captian America
                                </h2>
                                <div class="slide-movie-genres d-flex flex-row align-items-center">
                                    <span>
                                        R
                                    </span>
                                    <span>
                                        action
                                    </span>
                                    <span>
                                        adventure
                                    </span>
                                    <span>
                                        sci-fi
                                    </span>
                                </div>
                                <div class="slide-movie-info d-flex flex-row align-items-center">
                                    <span class="slide-movie-info-rate">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fal fa-star"></i>
                                        <i class="fal fa-star"></i>
                                        <i class="fal fa-star"></i>
                                    </span>
                                    <span class="slide-movie-info-likes">
                                        <i class="fas fa-thumbs-up"></i>
                                        31565 Like
                                    </span>
                                    <span class="slide-movie-info-comments">
                                        <i class="fas fa-comment"></i>
                                        459 Comments
                                    </span>
                                </div>
                                <p class="slide-movie-description">
                                    Steve Rogers, a rejected military soldier  transforms into Captain America after taking a dose of a "Super-Soldier serum".
                                </p>
                                <div class="slide-movie-btns d-flex flex-row justify-content-start align-items-center">
                                    <a class="btn">Watch Now</a>
                                    <a class="btn invert">view trailer</a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <!--    ===     END SLIDE #03   ===    -->
    
            </div>
    
            <!-- Add Pagination -->
            <div class="homepage-content-swiper-pagination swiper-pagination"></div>
            </div>
    
        <div class="homepage-pickedmovies-container d-flex flex-column">
            <!-- Add Arrows -->
            <div class="homepage-pickedmovies-swiper-button-next   swiper-button-next    swiper-pagination d-none d-md-flex">
            </div>
            <div class="homepage-pickedmovies-swiper-button-prev   swiper-button-prev    swiper-pagination  d-none d-md-flex">
            </div>
            <div class="homepage-random-content-heading d-flex flex-row align-items-center">
                <i class="fal fa-poll"></i>
                Trends Now
            </div>
            <div class="homepage-random-slider">
                <div class="homepage-random-slider-container">
                    <div class="swiper-wrapper">
    
    
                      <!-- START TREND MOVIE #01 -->
                      <div class="swiper-slide random-movie movie" data-movie-id = "${miniMoviesList[1].id}">
                        <span class="ribbon">
                            <span>
                                ${(miniMoviesList[1].original_language).toUpperCase()}
                            </span>
                        </span>
                          <a  class="random-movie-img">
                            <span class="random-movie-rate">
                                <span>
                                    ${(miniMoviesList[1].vote_average) * 10}%
                                </span>
                                <svg viewBox="0 0 36 36" class="circular-chart">
                                    <path class="circle"
                                    stroke-dasharray="${(miniMoviesList[1].vote_average) * 10}, 100"
                                    d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                </svg>
                            </span>
                              <img class="img-fluid" src="https://image.tmdb.org/t/p/w220_and_h330_face/${miniMoviesList[19].poster_path}" alt="">
                          </a>
                          <div class="random-movie-info">
                              <h2 class="random-movie-title">
                                  ${miniMoviesList[1].title}
                                </h2>
                              <span class="random-movie-release-date">
                                ${miniMoviesList[1].release_date}
                              </span>
                          </div>
                      </div>
                      <!-- END TREND MOVIE #01 -->
    
    
                      <!-- START TREND MOVIE #02 -->
                      <div class="swiper-slide random-movie movie" data-movie-id = "${miniMoviesList[17].id}" >
                        <span class="ribbon">
                            <span>
                                ${(miniMoviesList[17].original_language).toUpperCase()}
                            </span>
                        </span>
                        <a  class="random-movie-img">
                        <span class="random-movie-rate">
                            <span>
                            ${(miniMoviesList[17].vote_average) * 10}%
                              </span>
                            <svg viewBox="0 0 36 36" class="circular-chart">
                                <path class="circle"
                                  stroke-dasharray="${(miniMoviesList[17].vote_average) * 10}, 100"
                                  d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"/>
                              </svg>
                          </span>
                            <img class="img-fluid" src="https://image.tmdb.org/t/p/w220_and_h330_face/${miniMoviesList[17].poster_path}" alt="">
                        </a>
                        <div class="random-movie-info">
                            <h2 class="random-movie-title">
                                ${miniMoviesList[17].title}
                              </h2>
                            <span class="random-movie-release-date">
                                ${miniMoviesList[17].release_date}
                            </span>
                        </div>
                    </div>
                    <!-- END TREND MOVIE #02 -->
    
    
                    <!-- START TREND MOVIE #03 -->
                    <div class="swiper-slide random-movie movie"  data-movie-id = "${miniMoviesList[15].id}" >
                        
                        <span class="ribbon">
                            <span>
                                ${(miniMoviesList[15].original_language).toUpperCase()}
                            </span>
                        </span>
                        <a  class="random-movie-img">
                        <span class="random-movie-rate">
                            <span>
                            ${(miniMoviesList[15].vote_average) * 10}%
                              </span>
                            <svg viewBox="0 0 36 36" class="circular-chart">
                                <path class="circle"
                                  stroke-dasharray="${(miniMoviesList[15].vote_average) * 10}, 100"
                                  d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                              </svg>
                          </span>
                            <img class="img-fluid" src="https://image.tmdb.org/t/p/w220_and_h330_face/${miniMoviesList[15].poster_path}" alt="">
                        </a>
                        <div class="random-movie-info">
                            <h2 class="random-movie-title">
                                ${miniMoviesList[15].title}
                              </h2>
                            <span class="random-movie-release-date">
                                ${miniMoviesList[15].release_date}
                            </span>
                        </div>
                    </div>
                    <!-- END TREND MOVIE #03 -->
    
    
                    <!-- START TREND MOVIE #04 -->
                    <div class="swiper-slide random-movie movie" data-movie-id = "${miniMoviesList[13].id}" >
                        
                        <span class="ribbon">
                            <span>
                                ${(miniMoviesList[13].original_language).toUpperCase()}
                            </span>
                        </span>
                        <a  class="random-movie-img">
                        <span class="random-movie-rate">
                            <span>
                            ${(miniMoviesList[13].vote_average) * 10}%
                              </span>
                            <svg viewBox="0 0 36 36" class="circular-chart">
                                <path class="circle"
                                  stroke-dasharray="${(miniMoviesList[13].vote_average) * 10}, 100"
                                  d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                              </svg>
                          </span>
                            <img class="img-fluid" src="https://image.tmdb.org/t/p/w220_and_h330_face/${miniMoviesList[13].poster_path}" alt="">
                        </a>
                        <div class="random-movie-info">
                            <h2 class="random-movie-title">
                                ${miniMoviesList[13].title}
                              </h2>
                            <span class="random-movie-release-date">
                                ${miniMoviesList[13].release_date}
                            </span>
                        </div>
                    </div>
                    <!-- END TREND MOVIE #04 -->
    
    
                    <!-- START TREND MOVIE #05 -->
                    <div class="swiper-slide random-movie movie" data-movie-id = "${miniMoviesList[11].id}" >
                       
                        <span class="ribbon">
                            <span>
                                ${(miniMoviesList[11].original_language).toUpperCase()}
                            </span>
                        </span>
                        <a  class="random-movie-img">
                        <span class="random-movie-rate">
                        <span>
                        ${(miniMoviesList[11].vote_average) * 10}%
                          </span>
                        <svg viewBox="0 0 36 36" class="circular-chart">
                            <path class="circle"
                              stroke-dasharray="${(miniMoviesList[11].vote_average) * 10}, 100"
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                          </svg>
                      </span>
                            <img class="img-fluid" src="https://image.tmdb.org/t/p/w220_and_h330_face/${miniMoviesList[11].poster_path}" alt="">
                        </a>
                        <div class="random-movie-info">
                            <h2 class="random-movie-title">
                                ${miniMoviesList[11].title}
                              </h2>
                            <span class="random-movie-release-date">
                                ${miniMoviesList[11].release_date}
                            </span>
                        </div>
                    </div>
                    <!-- END TREND MOVIE #05 -->
    
    
                    <!-- START TREND MOVIE #06 -->
                    <div class="swiper-slide random-movie movie" data-movie-id = "${miniMoviesList[9].id}" >
                        
                        <span class="ribbon">
                            <span>
                                ${(miniMoviesList[9].original_language).toUpperCase()}
                            </span>
                        </span>
                        <a  class="random-movie-img">
                        <span class="random-movie-rate">
                            <span>
                            ${(miniMoviesList[9].vote_average) * 10}%
                              </span>
                            <svg viewBox="0 0 36 36" class="circular-chart">
                                <path class="circle"
                                  stroke-dasharray="${(miniMoviesList[9].vote_average) * 10}, 100"
                                  d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                              </svg>
                          </span>
                            <img class="img-fluid" src="https://image.tmdb.org/t/p/w220_and_h330_face/${miniMoviesList[9].poster_path}" alt="">
                        </a>
                        <div class="random-movie-info">
                            <h2 class="random-movie-title">
                                ${miniMoviesList[9].title}
                              </h2>
                            <span class="random-movie-release-date">
                                ${miniMoviesList[9].release_date}
                            </span>
                        </div>
                    </div>
                    <!-- END TREND MOVIE #06 -->
    
    
                    <!-- START TREND MOVIE #07 -->
                    <div class="swiper-slide random-movie movie"  data-movie-id = "${miniMoviesList[14].id}" >
                        
                        <span class="ribbon">
                            <span>
                                ${(miniMoviesList[14].original_language).toUpperCase()}
                            </span>
                        </span>
                        <a  class="random-movie-img">
                        <span class="random-movie-rate">
                            <span>
                            ${(miniMoviesList[14].vote_average) * 10}%
                              </span>
                            <svg viewBox="0 0 36 36" class="circular-chart">
                                <path class="circle"
                                  stroke-dasharray="${(miniMoviesList[14].vote_average) * 10}, 100"
                                  d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                              </svg>
                          </span>
                            <img class="img-fluid" src="https://image.tmdb.org/t/p/w220_and_h330_face/${miniMoviesList[14].poster_path}" alt="">
                        </a>
                        <div class="random-movie-info">
                            <h2 class="random-movie-title">
                                ${miniMoviesList[14].title}
                              </h2>
                            <span class="random-movie-release-date">
                            ${miniMoviesList[14].release_date}
                            </span>
                        </div>
                    </div>
                    <!-- END TREND MOVIE #07 -->
                    </div>
                </div>
            </div>
        </div>
    </section>`;

  
    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 0));
    contentDiv.innerHTML = homePageContent;
    var paths = document.querySelectorAll('.circle');
    paths.forEach(el => {
        let reputation = parseInt(el.getAttribute("stroke-dasharray").substring(0,3));
        if (reputation <= 75){
            el.style.stroke = "#FFDA3B";
        }
        if(reputation < 50) {
            el.style.stroke = "#C60013";
        }
    });
    activeSlider();
};

