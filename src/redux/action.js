export const searchMovies = async (query) => {
    if (!query) return false;

    const baseUrl = "https://api.themoviedb.org/3";
    const apiKey = "a3e128b42fdf8991f9609b48eb6c487b";
    const options = {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json;charset=UTF-8"
        },
    };

    const url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`;

    await fetch(url, options)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            // return data
            // useDispatch({
            //     type: "SEARCH_MOVIES",
            //     payload: data.results
            // })
            return {
                type: "SEARCH_MOVIES",
                payload: data.results
            }
        });

    // console.log('data', data.results);
}