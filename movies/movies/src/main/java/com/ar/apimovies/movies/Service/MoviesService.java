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

    public List<Movies> getMovies() {
        return moviesRepository.findAll();
    }

    public Movies addMovie(Movies movie) {
        return moviesRepository.save(movie);
    }
    
}
