package com.univesp.librosys.Model;

import java.util.Date;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Entity
@Table(name = "retirada")
@Data
public class Retirada {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "idLivros")    
    private Livros livros;
    
    @ManyToOne
    @JoinColumn(name = "idLeitor")    
    private Leitor leitor;
    
    @Temporal(TemporalType.DATE)
    private Date data_retirada = new Date();

    @Temporal(TemporalType.DATE)
    private Date devolucao_prevista;

    @Temporal(TemporalType.TIMESTAMP)
    private Date data_registro; 

    @Temporal(TemporalType.TIMESTAMP)
    private Date data_atualizacao;
    
}
