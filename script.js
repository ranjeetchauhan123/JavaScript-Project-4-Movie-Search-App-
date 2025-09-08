const API_KEY = "da9d270";
const rating = document.querySelector('#rating');
const imdb = document.querySelector('#imdb');
const title = document.querySelector('#title');
const type = document.querySelector('#type');
const release = document.querySelector('#release');
const country = document.querySelector('#country');
const language = document.querySelector('#language');
const writer = document.querySelector('#writer');
const poster = document.querySelector('#poster-img');

async function searchMovie(){
    const movieName = document.querySelector('#movieName').value;
    const URL = "http://www.omdbapi.com/?t=" + movieName + "&apikey=" + API_KEY;
    try{
        console.log("Request URL:", URL);
        const response = await fetch(URL);
        console.log(response);
        const data = await response.json();
        console.log("API Data :",data);
        if(data.Response == 'True'){
            rating.innerText = "Movie Rating : " + data.Ratings[0].Value;
            release.innerText = "Movie Release : " + data.Released;
            country.innerText = "Movie Country : " + data.Country;
            language.innerText = "Movie Language : " + data.Language;
            writer.innerText = "Movie Writer : " + data.Writer;
            imdb.innerText = "IMDB ID : " + data.imdbID;
            title.innerText = "Movie Title : " + data.Title;
            type.innerText = "Movie Type : " + data.Type;
            poster.src = data.Poster;
        } else {
            alert('Movie Not Found');
        }
    } catch (err) {
        console.log("your Error is : ", err);
            }
        }