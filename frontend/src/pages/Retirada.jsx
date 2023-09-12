import React, {useEffect,useState} from 'react';
import axios from 'axios';

// função principal da página retirada
function Retirada() {

      // constante querecebe os retirada do db dando get
      const [retirada, setRetirada] = useState([]);
      
      // constante que atualiza a lista dos retirada
      const [atualizar, setAtualizar] = useState();

      const [retiradaSelecionado, setRetiradaSelecionado] = useState({});

      const [idlivros, setidlivros] = useState([]);
      const [idleitor, setidleitor] = useState([]);

     
      
      useEffect(() => {
        axios.get("http://localhost:8080/api/retirada/").then((result) => {          
          setRetirada(result.data);
          console.log(retirada)
        });
      
        axios.get("http://localhost:8080/api/livros/").then((result) => {
          setidlivros(result.data);
        });
      
        axios.get("http://localhost:8080/api/leitor/").then((result) => {
          setidleitor(result.data);
        });
      }, [atualizar]);

      
      function hadleChangeRetirada(event) {
        const { name, value } = event.target;
        let newValue = value;
      
        // Verifica se o campo é um campo de seleção de livro ou leitor
        if (name === "id_livros" || name === "id_leitor") {
          newValue = parseInt(value); // Converte o valor para um número inteiro (ID)
        }
      
        setRetiradaSelecionado({ ...retiradaSelecionado, [name]: newValue });
      }


      function handleSubmit(event) {
        event.preventDefault();
        const livroSelecionado = idlivros.find((livros) => livros.id === retiradaSelecionado.id_livros);
        const leitorSelecionado = idleitor.find((leitor) => leitor.id === retiradaSelecionado.id_leitor);
      
        const retiradaData = {
          ...retiradaSelecionado,
          livros: livroSelecionado,
          leitor: leitorSelecionado
        };
      
        if (retiradaSelecionado.id === undefined) {
          axios
            .post('http://localhost:8080/api/retirada/', retiradaData)
            .then((result) => {
              setAtualizar(result);
            });
        } else { 
          axios
            .put('http://localhost:8080/api/retirada/', retiradaData)
            .then((result) => {
              setAtualizar(result);
            });
        }
      
        limparFormulario();
      }
      
      function limparFormulario() {
        setRetiradaSelecionado({});
      }

  function excluir(id){
    axios.delete("http://localhost:8080/api/retirada/"+id).then(result => {
      setAtualizar(result);
    });
  }


    // Exibição da página com formulário para inserção dos dados e lista de retirada

    //input em formato de botão submit inseri os dados

    //tabela retorna os dados do db com botão para alterar e exluir
  return (
      <div className="container"> <br/>      
        <h1> Registrar Retirada de Livro</h1> 
        <form onSubmit={handleSubmit}>
          <div className="col-4">
            <div>
              <label className="form-label">Leitor Requisitante:</label>
              <select 
              onChange={hadleChangeRetirada} 
              value={retiradaSelecionado.id_leitor || ''} 
              name="id_leitor" type="select" className="form-control">  

              <option value="-">Selecione o Leitor</option>
              {idleitor.map(leitor => (
                <option value={leitor.id}key={leitor.id}>
                  {leitor.nome}</option>
                ))}
            </select>
            </div>
            <div>
            <label className="form-label">Livro Retirado:</label>
            <select 
              onChange={hadleChangeRetirada} 
              value={retiradaSelecionado.id_livros || ''} 
              name="id_livros" type="select" className="form-control"> 

              <option value="-"> Selecione o Livro</option>
              {idlivros.map(livros => (
                <option value={livros.id}key={livros.id}>
                  {livros.titulo}</option>
                ))}
            </select>
            </div>
            <div>
              <label className="form-label">Data da Retirada:</label>
              <input onChange={hadleChangeRetirada} 
              value={retiradaSelecionado.data_retirada || ''} 
              name="data_retirada" type="date" className="form-control"/>
            </div>
            <div>
              <label className="form-label">Devolução Prevista:</label>
              <input onChange={hadleChangeRetirada} 
              value={retiradaSelecionado.devolucao_prevista || ''} 
              name="devolucao_prevista" type="date" className="form-control"/>
            </div>
            <br/> 
            <input type="submit" className="btn btn-success" value="Cadastrar"></input>
              
          </div>
        </form>
        <br/><br/><br/>
        
        <h2> Lista de Livros Retirados</h2> <br/>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Livro</th>
      <th scope="col">Aluno</th>
      <th scope="col">Data da Retirada</th>
      <th scope="col">Data da Devolução Prevista</th>
      <th scope="col">Alterado</th>
      <th scope="col">Devolvido</th>
    </tr>
  </thead>
  <tbody>
  {retirada.map((retid) => (
    <tr key={retid.id}>
      <td>{retid.livros ? retid.livros.titulo : ''}</td>
      <td>{retid.leitor ? retid.leitor.nome : ''}</td>
      <td>{retid.data_retirada}</td>
      <td>{retid.devolucao_prevista}</td>
      <td>
        <button
          onClick={() => setRetiradaSelecionado(retid)}
          className="btn btn-info"
        >
          Editar
        </button>
      </td>
      <td>
        <button
          onClick={() => excluir(retid.id)}
          className="btn btn-warning"
        >
          Devolver
        </button>
      </td>
    </tr>
  ))}
</tbody>
</table> <br/>
      </div>
    );
  }
  
  export default Retirada;