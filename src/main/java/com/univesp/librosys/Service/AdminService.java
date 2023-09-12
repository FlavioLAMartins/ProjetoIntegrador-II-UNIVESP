package com.univesp.librosys.Service;

import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.univesp.librosys.Model.Admin;
import com.univesp.librosys.Repository.AdminRepository;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public List<Admin> buscarTodos() {
        return adminRepository.findAll();
    }

    public Admin inserir(Admin admin) {
        admin.setData_registro(new Date());
        Admin adminNovo = adminRepository.saveAndFlush(admin);
        return adminNovo;
    }

    public Admin alterar(Admin admin) {
        admin.setData_atualizacao(new Date());
        return adminRepository.saveAndFlush(admin);
    }

    public void excluir(Long id) {
        Admin admin = adminRepository.findById(id).get();
        adminRepository.delete(admin);
    }

}
