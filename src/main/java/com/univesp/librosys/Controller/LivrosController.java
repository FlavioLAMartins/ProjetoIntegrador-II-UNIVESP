package com.univesp.librosys.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.univesp.librosys.Model.Livros;
import com.univesp.librosys.Service.LivrosService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/livros")
public class LivrosController {
    
    @Autowired
    private LivrosService livrosService;

    @GetMapping("/")
    public List<Livros> buscarTodos(){
       return livrosService.buscarTodos();
    }

    @PostMapping("/")
    public Livros inserir(@RequestBody Livros livros){
        return livrosService.inserir(livros);
    }

    @PutMapping("/")
    public Livros alterar(@RequestBody Livros livros) {
        return livrosService.alterar(livros);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable("id") Long id){
        livrosService.excluir(id);
        return ResponseEntity.ok().build();
    }
    
}
