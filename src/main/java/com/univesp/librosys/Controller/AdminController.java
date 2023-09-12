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
import com.univesp.librosys.Model.Admin;
import com.univesp.librosys.Service.AdminService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/admin")

public class AdminController {
    @Autowired
    private AdminService adminService;

    @GetMapping("/")
    public List<Admin> buscarTodos(){
       return adminService.buscarTodos();
    }

    @PostMapping("/")
    public Admin inserir(@RequestBody Admin admin){
        return adminService.inserir(admin);
    }

    @PutMapping("/")
    public Admin alterar(@RequestBody Admin admin){
        return adminService.alterar(admin);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable("id") Long id){
        adminService.excluir(id);
        return ResponseEntity.ok().build();
    }

}
