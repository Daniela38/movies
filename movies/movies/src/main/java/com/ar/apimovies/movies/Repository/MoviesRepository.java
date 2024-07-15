package com.ar.apimovies.movies.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ar.apimovies.movies.Model.Movies;

@Repository
public interface MoviesRepository extends JpaRepository<Movies, Long>{
    
} 