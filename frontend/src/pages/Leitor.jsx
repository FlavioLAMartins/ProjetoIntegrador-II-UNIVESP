import React, {useEffect,useState} from 'react';
import axios from 'axios';

// função principal da página leitor
function Leitor() {

      // constante querecebe o leitor do db dando get
      const [objeto, setObjeto] = useState([]);
      
      // constante que atualiza a lista dos leitores
      const [atualizar, setAtualizar] = useState();

      const [objetoSelecionado, setObjetoSelecionado] = useState({});

      // função  que obtém os leitores do db dando get e armazena os dados na colouna
      useEffect(() => {
          axios.get("http://localhost:8080/api/leitor/").then((result)=>{
            setObjeto(result.data);
          });
      },[atualizar]);

      
    function hadleChangeLivro(event) {
        setObjetoSelecionado({ ...objetoSelecionado, [event.target.name]: event.target.value });
      }


      function handleSubmit(event) {
        event.preventDefault();
        if (objetoSelecionado.id === undefined) {
          console.log('Inserir');
          axios
            .post('http://localhost:8080/api/leitor/', objetoSelecionado)
            .then((result) => {
              setAtualizar(result);
            });
        } else {
          axios
            .put('http://localhost:8080/api/leitor/', objetoSelecionado)
            .then((result) => {
              setAtualizar(result);
            });
        }
        limparFormulario(); // Limpar o formulário após a submissão
      }
      
      function limparFormulario() {
        setObjetoSelecionado({});
      }

  function excluir(id){
    axios.delete("http://localhost:8080/api/leitor/"+id).then(result => {
      setAtualizar(result);
    });

  }

    // Exibição da página com formulário para inserção dos dados e lista de leitores

    //input em formato de botão submit inseri os dados

    //tabela retorna os dados do db com botão para alterar e exluir
  return (
      <div className="container"> <br/>
        <h1> Cadastrar Leitor</h1>
        <form onSubmit={handleSubmit}>
          <div className="col-4">
            <div>
              <label className="form-label">Nome:</label>
              <input onChange={hadleChangeLivro} 
              value={objetoSelecionado.nome || ''} 
              name="nome" type="text" className="form-control"/>
            </div>
            <div>
              <label className="form-label">Sobrenome:</label>
              <input onChange={hadleChangeLivro} 
              value={objetoSelecionado.sobrenome || ''} 
              name="sobrenome" type="text" className="form-control"/>
            </div>
            <div>
              <label className="form-label">Idade:</label>
              <input onChange={hadleChangeLivro} 
              value={objetoSelecionado.idade || ''} 
              name="idade" type="text" className="form-control"/>
            </div>
            <div>
              <label className="form-label">R.A:</label>
              <input onChange={hadleChangeLivro} value={objetoSelecionado.ra || ''}
              name="ra" type="text" className="form-control"/>
            </div>
            
            <br/> 
            <input type="submit" className="btn btn-success" value="Cadastrar"></input>
              
          </div>
        </form>
        <br/><br/><br/>
        <h2> Lista de Leitores Cadastrados</h2> <br/>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Nome</th>
      <th scope="col">Sobrenome</th>
      <th scope="col">Idade</th>
      <th scope="col">R.A</th>
      <th scope="col">Editar</th>
      <th scope="col">Deletar</th>
    </tr>
  </thead>
  <tbody>
    {objeto.map(obj => (
      <tr key={obj.id}>
        <td>{obj.nome}</td>
        <td>{obj.sobrenome}</td>
        <td>{obj.idade}</td>
        <td>{obj.ra}</td>
        <td>

          <button 
          onClick={()=>setObjetoSelecionado(obj)} 
          className='btn btn-info'
          >Alterar
          </button> 
          </td> 
          <td>   
          <button 
          onClick={()=>excluir(obj.id)} 
          className='btn btn-warning'
          >Excluir
          </button>
         
        </td>
      </tr>
     ))}
  </tbody>
</table>
      </div>
    );
  }
  
  export default Leitor;