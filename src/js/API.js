function getData() {
return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=0f483e0f9987fd0d89c1b0732ea93785`)
    .then(response => response.json())
    .then(
        (data) => {
            let miniMoviesList = [
                data.results[0],
                data.results[8],
                data.results[2],
                data.results[17],
                data.results[4],
                data.results[5],
                data.results[19]
            ];
            return miniMoviesList;
        }
    )
};


console.log(getData());