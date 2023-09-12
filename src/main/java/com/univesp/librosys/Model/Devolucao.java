package com.univesp.librosys.Model;

import java.util.Date;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Entity
@Table(name = "devolucao")
@Data
public class Devolucao {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @OneToOne
    @JoinColumn(name = "id_retirada", referencedColumnName = "id")
    private Retirada retirada;

    @Temporal(TemporalType.DATE)
    private Date data_devolucao = new Date();

    @Temporal(TemporalType.TIMESTAMP)
    private Date data_registro; 

    @Temporal(TemporalType.TIMESTAMP)
    private Date data_atualizacao;
    
}