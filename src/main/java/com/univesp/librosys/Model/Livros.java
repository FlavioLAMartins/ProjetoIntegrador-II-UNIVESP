package com.univesp.librosys.Model;


import java.util.Date;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Entity
@Table(name = "livros")
@Data
public class Livros {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String titulo;
    private String autor;
    private String genero;
    private Integer nmr_pagina;
    private String ano_edicao;
    @Temporal(TemporalType.TIMESTAMP)
    private Date data_registro; 
    @Temporal(TemporalType.TIMESTAMP)
    private Date data_atualizacao; 
}
