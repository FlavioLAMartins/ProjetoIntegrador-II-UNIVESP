package com.univesp.librosys.Service;

import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.univesp.librosys.Model.Retirada;
import com.univesp.librosys.Repository.RetiradaRepository;

@Service
public class RetiradaService {
    @Autowired
    private RetiradaRepository retiradaRepository;

    public List<Retirada> buscarTodos() {
        return retiradaRepository.findAll();
    }

    public Retirada inserir(Retirada retirada) {
        retirada.setData_registro(new Date());
        Retirada retiradaNovo = retiradaRepository.saveAndFlush(retirada);
        return retiradaNovo;
    }

    public Retirada alterar(Retirada retirada) {
        retirada.setData_atualizacao(new Date());
        return retiradaRepository.saveAndFlush(retirada);
    }

    public void excluir(Long id) {
        Retirada retirada = retiradaRepository.findById(id).get();
        retiradaRepository.delete(retirada);
    }

}