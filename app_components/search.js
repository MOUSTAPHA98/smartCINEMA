async function GET_DATA_search() {
  
let searchPageContent =`
<!--===========================-->
<!--    ===     START SEARCH AREA    ===   -->
<!--===========================-->
    <section class="search-area">
            <div class="search-field d-flex flex-row justify-content-between align-items-center">
                <input  id="search-input"  type="text" placeholder="What movie looking for ?" autocomplete="off">
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
contentDiv.innerHTML = searchPageContent;
};

