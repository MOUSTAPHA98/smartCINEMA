async function GET_DATA_favourites() {
  
    // read API DATA
    let response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=0f483e0f9987fd0d89c1b0732ea93785');
    let results = await response.json();
    let el = await results.results;

    // write data
    favPageContent = `FAVOURITES`;
  
    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 0));
    contentDiv.innerHTML = favPageContent;
};

