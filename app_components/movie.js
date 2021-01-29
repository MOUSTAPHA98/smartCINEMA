let movie;

$(document).on('click', '.movie', async function () {

    //  Update the ID of the movie
    let $movieID = this.getAttribute("data-movie-id");
    // Set The History State
    window.history.pushState({$movieID}, `${$movieID}`, `movie/${$movieID}`);   
    



    // read API DATA
    let response = await fetch(`https://api.themoviedb.org/3/movie/${$movieID}?api_key=0f483e0f9987fd0d89c1b0732ea93785&append_to_response=videos,reviews,similar`);
    let result = await response.json();
    let 
        $movie_title = result.original_title,
        $movie_backdrop = result.backdrop_path,
        $movie_genres = result.genres,
        $movie_homepage  = result.homepage,
        $movie_overview = result.overview,
        $movie_pop = result.popularity,
        $movie_poster = result.poster_path,
        $movie_r_d = result.release_date.substring(0, 4),
        $movie_revenue = result.revenue,
        $movie_budget = result.budget,
        $movie_vote_average = result.vote_average,
        $movie_vote_count = result.vote_count;
       
        // Change Browser Title To The Name Of Selected Tab
        document.title = `smartCINEMA | ${$movie_title}`;


        let movieContent = `
        <section class="movie-content-area">
                        <div class="movie-area">
                            <img class="movie-backdrop" src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${$movie_backdrop}" alt="">
                            <div class="overlay"></div>
                            <div class="row m-0">
                                <div class="col-4 d-flex align-items-center movie-poster">
                                    <img class="d-none d-md-block" src="http://image.tmdb.org/t/p/w300_and_h450_bestv2/${$movie_poster}" alt="">
                                </div>
                                <div class="col-8 d-flex flex-column justify-content-center">
                                    <h2 class="movie-title">
                                        ${$movie_title} <span class="movie-r-d">(${$movie_r_d})</span>
                                    </h2>
                                    <div class="movie-genres d-flex flex-row align-items-center">
                                   </div>
                                    <div class="movie-info d-flex flex-row align-items-center">
                                        <span class="movie-rate">
                                            <span>
                                                ${$movie_vote_average*10}%
                                            </span>
                                            <svg viewBox="0 0 36 36" class="circular-chart">
                                                <path class="circle"
                                                stroke-dasharray="${$movie_vote_average*10}, 100"
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
                                            <i class="fas fa-percentage"></i>
                                            ${$movie_vote_count}
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
                            </div>
                        </div>
                    </section>`;
                
                     contentDiv.innerHTML = "",
                     setTimeout(() => {
                        contentDiv.innerHTML = movieContent;
                        coloRatePaths();
                        let movie_genres_area =document.querySelector(".movie-genres");
   
                        $movie_genres.forEach(el => {
                            let genre = `<span>${el.name}</span>`
                            movie_genres_area.innerHTML += genre;
                        });
                     }, 500);
});