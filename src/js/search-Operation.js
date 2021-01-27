search_input.onfocus = () =>{
    if( search_input.placeholder != ""){
        search_input.placeholder = ""
    }
};

search_input.onblur = () =>{
    if(search_input.placeholder === ""){
        search_input.placeholder = "What movie looking for ?"
    }
};


$(document).on('click', '#search-submit', async function(){
    var search_input = document.getElementById('search-input');
    var search_results_area = document.getElementById('search-results-area');

    let keyword = search_input.value; 
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=0f483e0f9987fd0d89c1b0732ea93785&query=${keyword}&page=1`);
    let results = await response.json();
    let searchResults = await results.results;
    await searchResults.forEach(el => {
        console.log(el)
        let movie_Id = el.id,
            movie_Title = el.title,
            movie_Langage = el.original_language,
            movie_Poster = el.poster_path,
            movie_Date = el.release_date,
            movie_Rate = el.vote_average *10;
        
    let movie = `
    <!--    ===  START MOVIE    ===  -->
        <div class="movie" data-movie-id=${movie_Id}>
            <span class="ribbon">
                <span>
                    ${movie_Langage}
                </span>
            </span>
            <a href="" class="movie-img">
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
    <!--    ===  END MOVIE    ===  -->`;

    search_results_area.innerHTML += `${movie}`;
    
   });

    
});


// async function applySearch() {

//     // read API DATA
    
// };
    

    