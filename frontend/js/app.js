
document.addEventListener('DOMContentLoaded', function () {
const form = document.getElementById("moviesForm");
const table = document.getElementById("moviesTable");

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const gender = document.getElementById('gender').value;
    const duration = document.getElementById('duration').value;
    const imageInput = document.getElementById('image');

    if (imageInput.files[0].size > 2 * 1024 * 1024) { // 2MB limit
        alert('La imagen es demasiado grande. El tamaño máximo permitido es de 2MB.');
        return;
    }

    const reader = new FileReader();

    reader.onloadend = function () {
        const movie = {
            titulo: title,
            genero: gender,
            duracion: duration,
            imagen: reader.result
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
    }
    reader.readAsDataURL(imageInput.files[0]);
});

function addMovieToTable(movie) {
    const row = table.insertRow();
    row.insertCell(0).innerText = movie.titulo;
    row.insertCell(1).innerText = movie.duracion;
    row.insertCell(2).innerText = movie.genero;
    const imgCell = row.insertCell(3);
    const img = document.createElement('img');
    img.src = movie.imagen;
    img.style.width = '50px';
    img.style.height = '50px';
    imgCell.appendChild(img);
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