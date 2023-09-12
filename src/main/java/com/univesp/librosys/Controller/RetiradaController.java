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
import com.univesp.librosys.Model.Retirada;
import com.univesp.librosys.Service.RetiradaService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/retirada")

public class RetiradaController {
    @Autowired
    private RetiradaService retiradaService;

    @GetMapping("/")
    public List<Retirada> buscarTodos(){
       return retiradaService.buscarTodos();
    }

    @PostMapping("/")
    public Retirada inserir(@RequestBody Retirada retirada){
        return retiradaService.inserir(retirada);
    }

    @PutMapping("/")
    public Retirada alterar(@RequestBody Retirada retirada){
        return retiradaService.alterar(retirada);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable("id") Long id){
        retiradaService.excluir(id);
        return ResponseEntity.ok().build();
    }
}
