let homepage;

fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=0f483e0f9987fd0d89c1b0732ea93785`)
  .then(response => response.json())
  .then(
      (data) => {
          let miniMoviesList = [
              data.results[0],
              data.results[1],
              data.results[2],
              data.results[3],
              data.results[4],
              data.results[5],
              data.results[19]
          ];
          return miniMoviesList;
      }
  )
  .then(
      ((miniMoviesList) => {
         homepage = `<!--=============================-->
<!--    ===     START HOMEPAGE AREA    ===    -->
<!--==============================-->

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
                                    Deadpool 2
                                </h2>
                                <div class="slide-movie-generes d-flex flex-row align-items-center">
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
                            <div class="slide-movie-generes d-flex flex-row align-items-center">
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
                            <div class="slide-movie-generes d-flex flex-row align-items-center">
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
            <i class="fal fa-film"></i>
            random picked
        </div>
        <div class="homepage-random-slider">
            <div class="homepage-random-slider-container">
                <div class="swiper-wrapper">


                  <!-- START TREND MOVIE #01 -->
                  <div class="swiper-slide random-movie">
                    <span class="ribbon">
                        <span>
                            ${(miniMoviesList[0].original_language).toUpperCase()}
                        </span>
                    </span>
                      <a href="" class="random-movie-img">
                        <span class="random-movie-rate">
                            <span>
                                ${(miniMoviesList[0].vote_average) * 10}%
                            </span>
                            <svg viewBox="0 0 36 36" class="circular-chart">
                                <path class="circle"
                                stroke-dasharray="${(miniMoviesList[0].vote_average) * 10}, 100"
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                            </svg>
                        </span>
                          <img class="img-fluid" src="https://image.tmdb.org/t/p/w220_and_h330_face/${miniMoviesList[0].poster_path}" alt="">
                      </a>
                      <div class="random-movie-info">
                          <h2 class="random-moviee-title">
                              ${miniMoviesList[0].title}
                            </h2>
                          <span class="random-movie-release-date">
                            ${miniMoviesList[0].release_date}
                          </span>
                      </div>
                  </div>
                  <!-- END TREND MOVIE #01 -->


                  <!-- START TREND MOVIE #02 -->
                  <div class="swiper-slide random-movie">
                    <span class="ribbon">
                        <span>
                            ${(miniMoviesList[1].original_language).toUpperCase()}
                        </span>
                    </span>
                    <a href="" class="random-movie-img">
                    <span class="random-movie-rate">
                        <span>
                        ${(miniMoviesList[1].vote_average) * 10}%
                          </span>
                        <svg viewBox="0 0 36 36" class="circular-chart">
                            <path class="circle"
                              stroke-dasharray="${(miniMoviesList[1].vote_average) * 10}, 100"
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"/>
                          </svg>
                      </span>
                        <img class="img-fluid" src="https://image.tmdb.org/t/p/w220_and_h330_face/${miniMoviesList[1].poster_path}" alt="">
                    </a>
                    <div class="random-movie-info">
                        <h2 class="random-moviee-title">
                            ${miniMoviesList[1].title}
                          </h2>
                        <span class="random-movie-release-date">
                            ${miniMoviesList[1].release_date}
                        </span>
                    </div>
                </div>
                <!-- END TREND MOVIE #02 -->


                <!-- START TREND MOVIE #03 -->
                <div class="swiper-slide random-movie">
                    
                    <span class="ribbon">
                        <span>
                            ${(miniMoviesList[2].original_language).toUpperCase()}
                        </span>
                    </span>
                    <a href="" class="random-movie-img">
                    <span class="random-movie-rate">
                        <span>
                        ${(miniMoviesList[2].vote_average) * 10}%
                          </span>
                        <svg viewBox="0 0 36 36" class="circular-chart">
                            <path class="circle"
                              stroke-dasharray="${(miniMoviesList[2].vote_average) * 10}, 100"
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                          </svg>
                      </span>
                        <img class="img-fluid" src="https://image.tmdb.org/t/p/w220_and_h330_face/${miniMoviesList[2].poster_path}" alt="">
                    </a>
                    <div class="random-movie-info">
                        <h2 class="random-moviee-title">
                            ${miniMoviesList[2].title}
                          </h2>
                        <span class="random-movie-release-date">
                            ${miniMoviesList[2].release_date}
                        </span>
                    </div>
                </div>
                <!-- END TREND MOVIE #03 -->


                <!-- START TREND MOVIE #04 -->
                <div class="swiper-slide random-movie">
                    
                    <span class="ribbon">
                        <span>
                            ${(miniMoviesList[3].original_language).toUpperCase()}
                        </span>
                    </span>
                    <a href="" class="random-movie-img">
                    <span class="random-movie-rate">
                        <span>
                        ${(miniMoviesList[3].vote_average) * 10}%
                          </span>
                        <svg viewBox="0 0 36 36" class="circular-chart">
                            <path class="circle"
                              stroke-dasharray="${(miniMoviesList[3].vote_average) * 10}, 100"
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                          </svg>
                      </span>
                        <img class="img-fluid" src="https://image.tmdb.org/t/p/w220_and_h330_face/${miniMoviesList[3].poster_path}" alt="">
                    </a>
                    <div class="random-movie-info">
                        <h2 class="random-moviee-title">
                            ${miniMoviesList[3].title}
                          </h2>
                        <span class="random-movie-release-date">
                            ${miniMoviesList[3].release_date}
                        </span>
                    </div>
                </div>
                <!-- END TREND MOVIE #04 -->


                <!-- START TREND MOVIE #05 -->
                <div class="swiper-slide random-movie">
                   
                    <span class="ribbon">
                        <span>
                            ${(miniMoviesList[4].original_language).toUpperCase()}
                        </span>
                    </span>
                    <a href="" class="random-movie-img">
                    <span class="random-movie-rate">
                    <span>
                    ${(miniMoviesList[4].vote_average) * 10}%
                      </span>
                    <svg viewBox="0 0 36 36" class="circular-chart">
                        <path class="circle"
                          stroke-dasharray="${(miniMoviesList[4].vote_average) * 10}, 100"
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                  </span>
                        <img class="img-fluid" src="https://image.tmdb.org/t/p/w220_and_h330_face/${miniMoviesList[4].poster_path}" alt="">
                    </a>
                    <div class="random-movie-info">
                        <h2 class="random-moviee-title">
                            ${miniMoviesList[4].title}
                          </h2>
                        <span class="random-movie-release-date">
                            ${miniMoviesList[4].release_date}
                        </span>
                    </div>
                </div>
                <!-- END TREND MOVIE #05 -->


                <!-- START TREND MOVIE #06 -->
                <div class="swiper-slide random-movie">
                    
                    <span class="ribbon">
                        <span>
                            ${(miniMoviesList[5].original_language).toUpperCase()}
                        </span>
                    </span>
                    <a href="" class="random-movie-img">
                    <span class="random-movie-rate">
                        <span>
                        ${(miniMoviesList[5].vote_average) * 10}%
                          </span>
                        <svg viewBox="0 0 36 36" class="circular-chart">
                            <path class="circle"
                              stroke-dasharray="${(miniMoviesList[5].vote_average) * 10}, 100"
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                          </svg>
                      </span>
                        <img class="img-fluid" src="https://image.tmdb.org/t/p/w220_and_h330_face/${miniMoviesList[5].poster_path}" alt="">
                    </a>
                    <div class="random-movie-info">
                        <h2 class="random-moviee-title">
                            ${miniMoviesList[5].title}
                          </h2>
                        <span class="random-movie-release-date">
                            ${miniMoviesList[5].release_date}
                        </span>
                    </div>
                </div>
                <!-- END TREND MOVIE #06 -->


                <!-- START TREND MOVIE #07 -->
                <div class="swiper-slide random-movie">
                    
                    <span class="ribbon">
                        <span>
                            ${(miniMoviesList[6].original_language).toUpperCase()}
                        </span>
                    </span>
                    <a href="" class="random-movie-img">
                    <span class="random-movie-rate">
                        <span>
                        ${(miniMoviesList[6].vote_average) * 10}%
                          </span>
                        <svg viewBox="0 0 36 36" class="circular-chart">
                            <path class="circle"
                              stroke-dasharray="${(miniMoviesList[6].vote_average) * 10}, 100"
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                          </svg>
                      </span>
                        <img class="img-fluid" src="https://image.tmdb.org/t/p/w220_and_h330_face/${miniMoviesList[6].poster_path}" alt="">
                    </a>
                    <div class="random-movie-info">
                        <h2 class="random-moviee-title">
                            ${miniMoviesList[6].title}
                          </h2>
                        <span class="random-movie-release-date">
                        ${miniMoviesList[6].release_date}
                        </span>
                    </div>
                </div>
                <!-- END TREND MOVIE #07 -->
                </div>
            </div>
        </div>
    </div>
</section>
<!--============================-->
<!--    ===     END HOMEPAGE AREA    ===    -->
<!--============================-->`
          
      })
  )



