package com.ar.apimovies.movies.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ar.apimovies.movies.Model.Movies;
import com.ar.apimovies.movies.Service.MoviesService;

@RestController
@RequestMapping("/peliculas")
@CrossOrigin(origins = "http://localhost:5500")
public class MoviesController {

    @Autowired
    MoviesService moviesService;

    @GetMapping("")
    public List<Movies> getMovies() {
        return moviesService.getMovies();
    }

    @PostMapping("") 
    public void addMovie(@RequestBody Movies movie) {
        moviesService.addMovie(movie);
    } 
}
