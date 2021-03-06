// SET INPTUT FIELD PLACEHOLDER ON BLUR IT
$(document).on('blur', '#search-input', function () {
    $(this).attr("placeholder", "What movie looking for ?");
});

// CLEAR INPTUT FIELD PLACEHOLDER ON FOCUS IT
$(document).on('focus', '#search-input', function () {
    $(this).attr("placeholder", "");
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// APPLY SEARCH OPERATION ON CLICK SUBMIT BUTTON
$(document).on('click', '#search-submit', function () {
    applySearch(1);
});

// APPLY SEARCH OPERATION PAGINATION
let SearchpageNum = 1;
$(document).on('click', '#nextPaginationSearch', function () {
    applySearch(SearchpageNum+=1);
}); 

$(document).on('click', '#prevPaginationSearch', function () {
    (SearchpageNum > 1 ? applySearch(SearchpageNum-=1) :null);
}); 

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////


let applySearch = async function(resultsPage){
    let search_input = document.getElementById('search-input');
    let keyword = search_input.value; 
    window.history.pushState({keyword}, `${keyword}`, `search/${keyword}`);   

    var search_results_area = document.getElementById('search-results-area');
    search_results_area.innerHTML = "";
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=0f483e0f9987fd0d89c1b0732ea93785&query=${keyword}&page=${resultsPage}`);
    let results = await response.json();

    if (results.total_pages  > 1){
        search_results_area.innerHTML += 
        `<div class="page-pagination">
            <button id="prevPaginationSearch" class="prev">PREV PAGE</button>
            <button id="nextPaginationSearch" class"next">NEXT PAGE</button>
        </div>`;
    }
    let searchResults = await results.results;
        if (searchResults === undefined || searchResults.length === 0){
            search_results_area.innerHTML = 
            `<h4 class="_404">
                404
            </h4>
            <span class="_404message">
                Sorry, We could not found movie you looking for 😔😔
            </span>`;
    }
    await searchResults.forEach(el => {
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
        `<!--    ===  START MOVIE    ===  -->
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
        <!--    ===  END MOVIE    ===  -->`;

        search_results_area.innerHTML += `${movie}`;
        coloRatePaths();
        });
    };