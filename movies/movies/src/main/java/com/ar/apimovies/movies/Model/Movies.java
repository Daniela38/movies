package com.ar.apimovies.movies.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Movies {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idPelicula; 
    private String titulo; 
    private String genero; 
    private String duracion;
}
