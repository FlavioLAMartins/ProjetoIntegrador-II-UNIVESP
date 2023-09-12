import React, {useEffect,useState} from 'react';
import axios from 'axios';

// função principal da página retirada
function Devolucao() {

      // constante querecebe os retirada do db dando get
      const [devolucao, setDevolucao] = useState([]);
      
      // constante que atualiza a lista dos retirada
      const [atualizar, setAtualizar] = useState();

      const [devolucaoSelecionado, setDevolucaoSelecionado] = useState({});

      const [idretirada, setidretirada] = useState([]);

      
      useEffect(() => {
        axios.get("http://localhost:8080/api/devolucao/").then((result) => {          
        setDevolucao(result.data);
          console.log(devolucao)
        });
      
        axios.get("http://localhost:8080/api/retirada/").then((result) => {
            setidretirada(result.data);
        });

      }, [atualizar]);

      
      function hadleChangeDevolucao(event) {
        const { name, value } = event.target;
        let newValue = value;
      
        // Verifica se o campo é um campo de seleção de livro ou leitor
        if (name === "id_retirada") {
          newValue = parseInt(value); // Converte o valor para um número inteiro (ID)
        }
      
        setDevolucaoSelecionado({ ...devolucaoSelecionado, [name]: newValue });
      }


      function handleSubmit(event) {
        event.preventDefault();
        const livroSelecionado = idretirada.find((retirada) => retirada.id === devolucaoSelecionado.id_retirada);
      
        const devolucaoData = {
          ...devolucaoSelecionado,
          retirada: devolucaoSelecionado
        };
      
        if (devolucaoSelecionado.id === undefined) {
          axios
            .post('http://localhost:8080/api/devolucao/', devolucaoData)
            .then((result) => {
              setAtualizar(result);
            });
        } else { 
          axios
            .put('http://localhost:8080/api/devolucao/', devolucaoData)
            .then((result) => {
              setAtualizar(result);
            });
        }
      
        limparFormulario();
      }
      
      function limparFormulario() {
        setDevolucaoSelecionado({});
      }

  function excluir(id){
    axios.delete("http://localhost:8080/api/devolucao/"+id).then(result => {
      setAtualizar(result);
    });
  }


    // Exibição da página com formulário para inserção dos dados e lista de retirada

    //input em formato de botão submit inseri os dados

    //tabela retorna os dados do db com botão para alterar e exluir
  return (
      <div className="container"> <br/>      
    
        <br/><br/>
        
        <h2> Lista de Livros Devolvidos</h2> <br/>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Livro</th>
      <th scope="col">Leitor</th>
      <th scope="col">Data da Retirada</th>
      <th scope="col">Devolução Prevista</th>
      <th scope="col">Data Devolução</th>
    </tr>
  </thead>
  <tbody>
  {devolucao.map((devol) => (
    <tr key={devol.id}>
      <td>{devol.retirada ? devol.retirada.livros.titulo : ''}</td>
      <td>{devol.retirada ? devol.retirada.leitor.nome : ''}</td>
      <td>{devol.retirada ? devol.retirada.data_retirada : ''}</td>
      <td>{devol.retirada ? devol.retirada.devolucao_prevista : ''}</td>
      <td>{devol.data_devolucao}</td> 
    </tr>
  ))}
</tbody>
</table> <br/><br/><br/>
      </div>
    );
  }
  
  export default Devolucao;