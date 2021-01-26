async function GET_DATA_now_playing() {
  
    // read API DATA
    let response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=0f483e0f9987fd0d89c1b0732ea93785');
    let results = await response.json();
    let miniMoviesList = await results.results;

    // write data
    nowPlayingPageContent = `NOW_PLAYING`;
  
    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 0));
    contentDiv.innerHTML = nowPlayingPageContent;
};

