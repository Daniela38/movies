
document.addEventListener('DOMContentLoaded', function () {
const form = document.getElementById("moviesForm");
const table = document.getElementById("moviesTable");

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const gender = document.getElementById('gender').value;
    const duration = document.getElementById('duration').value

        const movie = {
            titulo: title,
            genero: gender,
            duracion: duration
        };

        console.log('Sending movie data:', movie)

    fetch('http://localhost:8080/peliculas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error al agregar película');
        }
    })
    .then(() => {
        console.log('Adding movie to table', movie)
        addMovieToTable(movie);
        form.reset();
    })
    .catch(error => console.error('Error:', error));
    
});

function addMovieToTable(movie) {
    const row = table.insertRow();
    row.insertCell(0).innerText = movie.titulo;
    row.insertCell(1).innerText = movie.duracion;
    row.insertCell(2).innerText = movie.genero;
    console.log('addmoviesToTable se está ejecutando')
}

function loadMovies() {
    fetch('http://localhost:8080/peliculas')
        .then(response => response.json())
        .then(movies => {
            movies.forEach(movie => addMovieToTable(movie))
        })
        .catch(error => console.error('Error:', error));
}

loadMovies();
});