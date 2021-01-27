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
    let keyword = search_input.value; 

    var search_results_area = document.getElementById('search-results-area');
    search_results_area.innerHTML = "";

    let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=0f483e0f9987fd0d89c1b0732ea93785&query=${keyword}&page=1`);
    let results = await response.json();
    let searchResults = await results.results;
    console.log(searchResults);
    if (searchResults.length === 0){
        search_results_area.innerHTML = `
    <h4 class="_404">
        404
    </h4>
    <span class="_404message">
        Sorry, We could not found movies you looking for 😔😔
    </span>`;
    }
    await searchResults.forEach(el => {
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
   var paths = document.querySelectorAll('.circle');
   paths.forEach(el => {
       let ratee = parseInt(el.getAttribute("stroke-dasharray").substring(0,3));
       if (ratee <= 75){
           el.style.stroke = "#FFDA3B";
       }
       if(ratee < 50) {
           el.style.stroke = "tomato";
       }
   });
});



    