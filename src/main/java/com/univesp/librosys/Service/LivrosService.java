package com.univesp.librosys.Service;

import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.univesp.librosys.Model.Livros;
import com.univesp.librosys.Repository.LivrosRepository;

@Service
public class LivrosService {
    @Autowired
    private LivrosRepository livrosRepository;

    public List<Livros> buscarTodos() {
        return livrosRepository.findAll();
    }

    public Livros inserir(Livros livros) {
        livros.setData_registro(new Date());
        Livros livrosNovo = livrosRepository.saveAndFlush(livros);
        return livrosNovo;
    }

    public Livros alterar(Livros livros) {
        livros.setData_atualizacao(new Date());
        return livrosRepository.saveAndFlush(livros);
    }

    public void excluir(Long id) {
        Livros livros = livrosRepository.findById(id).get();
        livrosRepository.delete(livros);
    }
}
    

