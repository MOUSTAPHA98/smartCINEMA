var search_results_area = document.querySelector('#search-results-area');
var search_input = document.querySelector('#search-input');
var search_submit = document.querySelector('#search-submit');

async function GET_DATA_search() {
  
// read API DATA
let response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=0f483e0f9987fd0d89c1b0732ea93785');
let results = await response.json();

// write data
searchPageContent =`
<!--===========================-->
<!--    ===     START SEARCH AREA    ===   -->
<!--===========================-->
                    <section class="search-area">
                            <div class="search-field d-flex flex-row justify-content-between align-items-center">
                                <input  id="search-input"  type="text" placeholder="What movie looking for ?">
                                <button  id="search-submit" >SEARCH</button>
                            </div>
                            <div id = "search-results-area" class="search-results">
                                <p>
                                     Start by searching for a movie. HAVE FUN 😘😘
                                </p>
                            </div>
                    </section>
<!--==========================-->
<!--    ===     END SEARCH AREA    ===    -->
<!--==========================-->`;

// wait TIME seconds
await new Promise((resolve, reject) => setTimeout(resolve, 0));
contentDiv.innerHTML = searchPageContent;
};

