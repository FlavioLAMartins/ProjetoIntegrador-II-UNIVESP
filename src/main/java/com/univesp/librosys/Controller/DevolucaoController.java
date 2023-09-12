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
import com.univesp.librosys.Model.Devolucao;
import com.univesp.librosys.Service.DevolucaoService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/devolucao")

public class DevolucaoController {
    @Autowired
    private DevolucaoService devolucaoService;

    @GetMapping("/")
    public List<Devolucao> buscarTodos(){
       return devolucaoService.buscarTodos();
    }

    @PostMapping("/")
    public Devolucao inserir(@RequestBody Devolucao devolucao){
        return devolucaoService.inserir(devolucao);
    }

    @PutMapping("/")
    public Devolucao alterar(@RequestBody Devolucao devolucao){
        return devolucaoService.alterar(devolucao);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable("id") Long id){
        devolucaoService.excluir(id);
        return ResponseEntity.ok().build();
    }
}
