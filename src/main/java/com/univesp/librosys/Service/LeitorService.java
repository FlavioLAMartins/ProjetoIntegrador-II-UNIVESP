package com.univesp.librosys.Service;

import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.univesp.librosys.Model.Leitor;
import com.univesp.librosys.Repository.LeitorRepository;

@Service
public class LeitorService {
    @Autowired
    private LeitorRepository leitorRepository;

    public List<Leitor> buscarTodos() {
        return leitorRepository.findAll();
    }

    public Leitor inserir(Leitor leitor) {
        leitor.setData_registro(new Date());
        Leitor leitorNovo = leitorRepository.saveAndFlush(leitor);
        return leitorNovo;
    }

    public Leitor alterar(Leitor leitor) {
        leitor.setData_atualizacao(new Date());
        return leitorRepository.saveAndFlush(leitor);
    }

    public void excluir(Long id) {
        Leitor leitor = leitorRepository.findById(id).get();
        leitorRepository.delete(leitor);
    }
}