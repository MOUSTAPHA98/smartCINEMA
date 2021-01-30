let movie;

$(document).on('click', '.movie', function () {
    let $movieID = this.getAttribute("data-movie-id");
    window.history.pushState({$movieID}, `${$movieID}`, `movie/${$movieID}`);
    key = $movieID;
    GET_DATA_movie(key);
});



GET_DATA_movie = async function () {
    let key = location.pathname.substring(7);
    let response = await fetch(`https://api.themoviedb.org/3/movie/${key}?api_key=0f483e0f9987fd0d89c1b0732ea93785&append_to_response=videos,reviews,similar,credits`);
    let result = await response.json();
    let 
        $movie_title = result.original_title,
        $movie_backdrop = result.backdrop_path,
        $movie_genres = result.genres,
        $movie_homepage  = result.homepage,
        $movie_overview = result.overview,
        $movie_pop = result.popularity,
        $movie_poster = result.poster_path,
        $movie_r_d = result.release_date,
        // $movie_revenue = result.revenue,
        $movie_Language = result.original_language,
        // $movie_budget = result.budget,
        $movie_vote_average = result.vote_average,
        $movie_runtime = result.runtime,
        $movie_cast = result.credits.cast;

        if($movie_poster === null){
            $movie_poster = `https://via.placeholder.com/300x450/C91919/FFFFFF/?text=NOT FOUND`;
        } else {
            $movie_poster = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${result.poster_path}`;
        };


        if($movie_backdrop === null){
            $movie_backdrop = `https://img.wallpapersafari.com/desktop/1366/768/65/44/c1xNqp.jpg`
        } else {
            $movie_backdrop = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${result.backdrop_path}`
        };
       
        // Change Browser Title To The Name Of Selected Tab
        document.title = `smartCINEMA | ${$movie_title}`;


        let movieContent = `
        <section class="movie-content-area">
                        <div class="movie-area">
                            <img class="movie-backdrop" src="${$movie_backdrop}" alt="">
                            <div class="overlay"></div>
                            <div class="row m-0">
                                <div class="col-4 movie-poster">
                                <span class="ribbon">
                                    <span>
                                    ${$movie_Language}
                                    </span>
                                </span>
                                    <img class="d-none d-md-block" src="${$movie_poster}" alt="">
                                </div>
                                <div class="col-8 d-flex flex-column justify-content-center">
                                    <h2 class="movie-title">
                                        ${$movie_title} <span class="movie-r-d">(${$movie_r_d.substring(0, 4)})</span>
                                    </h2>
                                    <div class="movie-genres d-flex flex-row align-items-center">
                                   </div>
                                    <div class="movie-info d-flex flex-row align-items-center">
                                        <span class="movie-rate">
                                            <span>
                                                ${$movie_vote_average * 10}%
                                            </span>
                                            <svg viewBox="0 0 36 36" class="circular-chart">
                                                <path class="circle"
                                                stroke-dasharray="${$movie_vote_average * 10}, 100"
                                                d="M18 2.0845
                                                    a 15.9155 15.9155 0 0 1 0 31.831
                                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                                />
                                            </svg>
                                        </span>
                                        <span class="movie-info-pop">
                                            <i class="fal fa-fire-alt"></i>
                                            ${$movie_pop}
                                        </span>
                                        <span class="movie-info-vote">
                                            <i class="fas fa-clock"></i>
                                            ${Math.floor($movie_runtime / 60)}HR ${$movie_runtime % 60}M
                                        </span>
                                        <span class="add-movie-fav">
                                            <i class="fal fa-heart"></i>
                                        </span>
                                        <span class="add-movie-watchlist">
                                            <i class="fal fa-bookmark"></i>
                                        </span>
                                    </div>
                                    <p class="movie-overview">
                                        ${$movie_overview}
                                    </p>
                                    <div class="movie-btns d-flex flex-row justify-content-start align-items-center">
                                        <a href="${$movie_homepage}" target="_blank" class="btn">Visit Website</a>
                                        <a class="btn invert">view trailer</a>
                                    </div>
                                </div>
                                <div class="movie-cast-slider">
                                    <div class="row m-0">
                                        <div class="col">
                                            <div class="movie-cast-swiper-container">
                                                <div class="swiper-wrapper">
                                                </div>
                                              </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="movie-trailer-area">
                        </div>
                    </section>`;

            
                     contentDiv.innerHTML = "",
                        contentDiv.innerHTML = movieContent;
                        if (result.videos.results.length != 0){
                            $movie_trailer = result.videos.results[0].key;
                            document.querySelector(".movie-trailer-area").innerHTML = `<iframe width="100%" height="500" src="https://www.youtube.com/embed/${$movie_trailer}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
                        }
                            
                        coloRatePaths();
                        activeSlider();
                        let movie_genres_area =document.querySelector(".movie-genres");
                        $movie_genres.forEach(el => {
                            let genre = `<span>${el.name}</span>`
                            movie_genres_area.innerHTML += genre;
                        });
                        let movie_cast_area =document.querySelector(".movie-cast-swiper-container .swiper-wrapper");
                        $movie_cast.forEach(el => {
                            if (el.profile_path != null){
                                $cast_profile_img = `https://image.tmdb.org/t/p/w300${el.profile_path}`; 

                                $cast_original_name = el.original_name,
                                $cast_role_name = el.character;
                                let cast =
                                `<div class="swiper-slide cast">
                                <div class="cast-profile-img">
                                <img class="img-fluid" src="${$cast_profile_img}" alt="">
                                </div>
                                <div class="cast-profile-info">
                                    <h3 class="cast-real-name">${$cast_original_name}</h3>
                                    <span class="cast-role-name">${$cast_role_name}</span>
                                </div>
                                </div>`;
                            movie_cast_area.innerHTML += cast;
                            }
                        });
}