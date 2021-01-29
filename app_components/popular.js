// APPLY SEARCH OPERATION PAGINATION
pageNum = 1;
$(document).on('click', '#nextPagination', function () {
    GET_DATA_popular(++pageNum);
}); 

$(document).on('click', '#prevPagination', function () {
    (pageNum > 1 ? GET_DATA_popular(--pageNum) :null);
}); 




async function GET_DATA_popular(resultsPage) {

let popularPageContent =`
<section id = "popular-movies-area" class="popular-movies-area">
    <div class="page-pagination">
        <button id="prevPagination" class="prev">PREV PAGE</button>
        <button id="nextPagination" class"next">NEXT PAGE</button>
    </div>
</section>`;
contentDiv.innerHTML = popularPageContent;

var popular_movies_area = document.getElementById("popular-movies-area");
  
    // read API DATA
    let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0f483e0f9987fd0d89c1b0732ea93785&page=${resultsPage}`);
    let results = await response.json();
    let popularMovies = await results.results;

    popularMovies.forEach(el => {
        let movie_Id = el.id,
        movie_Title = el.title,
        movie_Language = el.original_language,
        movie_Poster = el.poster_path,
        movie_Date = el.release_date,
        movie_Rate = el.vote_average *10;

        // APPLY MOVIE FOR EACH OF SEARCH RESULTS
        let movie =
        `
        <!--    ===  START MOVIE    ===  -->
        <div class="movie" data-movie-id=${movie_Id}>
        <span class="ribbon">
        <span>
        ${movie_Language}
        </span>
        </span>
        <a  class="movie-img">
        <span class="movie-rate">
        <span>
        ${movie_Rate}%
        </span>
        <svg viewBox="0 0 36 36" class="circular-chart">
        <path class="circle"
        stroke-dasharray="${movie_Rate}, 100"
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        </svg>
        </span>
        <img class="img-fluid" src="https://image.tmdb.org/t/p/w220_and_h330_face${movie_Poster}" alt="">
        </a>
        <div class="movie-info">
        <h2 class="movie-title">
        ${movie_Title}
        </h2>
        <span class="movie-release-date">
        ${movie_Date}
        </span>
        </div>
        </div>
        <!--    ===  END MOVIE    ===  -->
        `;
        popular_movies_area.innerHTML += `${movie}`;
        coloRatePaths();
    });
};


