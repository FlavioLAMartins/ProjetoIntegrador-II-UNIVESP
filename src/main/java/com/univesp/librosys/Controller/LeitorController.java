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
import com.univesp.librosys.Model.Leitor;
import com.univesp.librosys.Service.LeitorService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/leitor")
public class LeitorController {
    
    @Autowired
    private LeitorService leitorService;

    @GetMapping("/")
    public List<Leitor> buscarTodos(){
       return leitorService.buscarTodos();
    }

    @PostMapping("/")
    public Leitor inserir(@RequestBody Leitor leitor){
        return leitorService.inserir(leitor);
    }

    @PutMapping("/")
    public Leitor alterar(@RequestBody Leitor leitor){
        return leitorService.alterar(leitor);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable("id") Long id){
        leitorService.excluir(id);
        return ResponseEntity.ok().build();
    }
    
}
