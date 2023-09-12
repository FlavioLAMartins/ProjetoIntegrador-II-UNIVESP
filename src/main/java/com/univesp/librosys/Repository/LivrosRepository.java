package com.univesp.librosys.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.univesp.librosys.Model.Livros;

public interface LivrosRepository extends JpaRepository<Livros, Long>{
    
}