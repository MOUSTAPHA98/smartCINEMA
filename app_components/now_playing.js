// APPLY SEARCH OPERATION PAGINATION
let NowpageNum = 1;
$(document).on('click', '#nextPaginationNow', function () {
GET_DATA_now_playing(NowpageNum+=1);
}); 

$(document).on('click', '#prevPaginationNow', function () {
(NowpageNum > 1 ? GET_DATA_now_playing(NowpageNum-=1) :null);
}); 




async function GET_DATA_now_playing(resultsPage) {

let now_playingPageContent =
`<section id = "now-playing-movies-area" class="now-playing-movies-area">
<div class="page-pagination">
<button id="prevPaginationNow" class="prev">PREV PAGE</button>
<button id="nextPaginationNow" class"next">NEXT PAGE</button>
</div>
</section>`;
contentDiv.innerHTML = now_playingPageContent;

var now_playing_movies_area = document.getElementById("now-playing-movies-area");

// read API DATA
let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=0f483e0f9987fd0d89c1b0732ea93785&page=${resultsPage}`);
let results = await response.json();
let now_playingMovies = await results.results;

now_playingMovies.forEach(el => {
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
now_playing_movies_area.innerHTML += `${movie}`;
coloRatePaths();
});
};


