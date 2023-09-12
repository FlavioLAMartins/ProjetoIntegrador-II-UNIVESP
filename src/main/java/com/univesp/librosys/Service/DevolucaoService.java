package com.univesp.librosys.Service;

import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.univesp.librosys.Model.Devolucao;
import com.univesp.librosys.Repository.DevolucaoRepository;

@Service
public class DevolucaoService {
    @Autowired
    private DevolucaoRepository devolucaoRepository;

    public List<Devolucao> buscarTodos() {
        return devolucaoRepository.findAll();
    }

    public Devolucao inserir(Devolucao devolucao) {
        devolucao.setData_registro(new Date());
        Devolucao devolucaoNovo = devolucaoRepository.saveAndFlush(devolucao);
        return devolucaoNovo;
    }

    public Devolucao alterar(Devolucao devolucao) {
        devolucao.setData_atualizacao(new Date());
        return devolucaoRepository.saveAndFlush(devolucao);
    }

    public void excluir(Long id) {
        Devolucao devolucao = devolucaoRepository.findById(id).get();
        devolucaoRepository.delete(devolucao);
    }

}