// APPLY SEARCH OPERATION PAGINATION
toppageNum = 1;
$(document).on('click', '#nextPaginationTop', function () {
GET_DATA_top_rated(toppageNum+=1);
}); 

$(document).on('click', '#prevPaginationTop', function () {
(toppageNum > 1 ? GET_DATA_top_rated(toppageNum-=1) :null);
}); 


async function GET_DATA_top_rated(resultsPage) {

let top_ratedPageContent =
`<section id = "top-rated-movies-area" class="top-rated-movies-area">
<div class="page-pagination">
<button id="prevPaginationTop" class="prev">PREV PAGE</button>
<button id="nextPaginationTop" class"next">NEXT PAGE</button>
</div>
</section>`;
contentDiv.innerHTML = top_ratedPageContent;

var top_rated_movies_area = document.getElementById("top-rated-movies-area");

// read API DATA
let response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=0f483e0f9987fd0d89c1b0732ea93785&page=${resultsPage}`);
let results = await response.json();
let top_ratedMovies = await results.results;

top_ratedMovies.forEach(el => {
let movie_Id = el.id,
movie_Title = el.title,
movie_Language = el.original_language,
movie_Poster,
movie_Date = el.release_date,
movie_Rate = el.vote_average *10;

if (el.poster_path == null){
movie_Poster = `https://via.placeholder.com/220x330/C91919/FFFFFF/?text=NOT FOUND`;
} else {
movie_Poster = `https://image.tmdb.org/t/p/w220_and_h330_face${el.poster_path}`;
};

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
<img class="img-fluid" src="${movie_Poster}" alt="">
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
top_rated_movies_area.innerHTML += `${movie}`;
coloRatePaths();
});
};


