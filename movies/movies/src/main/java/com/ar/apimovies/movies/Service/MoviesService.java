package com.ar.apimovies.movies.Service;

import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ar.apimovies.movies.Model.Movies;
import com.ar.apimovies.movies.Repository.MoviesRepository;

@Service
public class MoviesService {

    @Autowired
    MoviesRepository moviesRepository;

    private static final int MAX_IMAGE_SIZE = 2 * 1024 * 1024;

    public List<Movies> getMovies() {
        return moviesRepository.findAll();
    }

    public Movies addMovie(Movies movie) throws IllegalArgumentException {

        String base64Image = movie.getImagen();
    byte[] imageBytes = Base64.getDecoder().decode(base64Image.split(",")[1]);

    if (imageBytes.length > MAX_IMAGE_SIZE) {
        throw new IllegalArgumentException("El tamaño de la imagen excede el límite permitido");
    }

        return moviesRepository.save(movie);
    }
    
}
