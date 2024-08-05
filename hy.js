const movieCollection = {
    movies: [],

    addMovie: function(title, director, releaseYear, imdbRating) {
        const movie = {
            title: title,
            director: director,
            releaseYear: releaseYear,
            imdbRating: imdbRating
        };
        this.movies.push(movie);
        console.log(`Movie "${title}" added to collection`);
        this.displayMovies();
    },

    deleteMovie: function(title) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === title) {
                this.movies.splice(i, 1);
                console.log(`Movie "${title}" has been removed from the collection`);
                this.displayMovies(); 
                
            }
        }
        
    },

    displayMovies: function() {
        const movieList = document.getElementById('movieList');
        movieList.innerHTML = '';

        this.movies.forEach((movie, index) => {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie');
            movieDiv.innerHTML = `
            ${movie.title} (${movie.releaseYear})<br>
                Directed by: ${movie.director}<br>
                IMDB Rating: ${movie.imdbRating}<br>
                <button onclick="movieCollection.deleteMovie('${movie.title.replace(/'/g, "\\'")}')">Delete</button>
            `;
            movieList.appendChild(movieDiv);
        });
    }
};

document.getElementById('addMovieButton').addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const director = document.getElementById('director').value;
    const releaseYear = document.getElementById('releaseYear').value;
    const imdbRating = document.getElementById('imdbRating').value;

    if (title && director && releaseYear && imdbRating) {
        movieCollection.addMovie(title, director, releaseYear, imdbRating);
        document.getElementById('title').value = '';
        document.getElementById('director').value = '';
        document.getElementById('releaseYear').value = '';
        document.getElementById('imdbRating').value = '';
    } else {
        alert('Please fill in all fields');
    }
});


