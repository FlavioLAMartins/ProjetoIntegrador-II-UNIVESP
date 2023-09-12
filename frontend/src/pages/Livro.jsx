import React, {useEffect,useState} from 'react';
import axios from 'axios';

// função principal da página Livro
function Livro() {

      // constante querecebe os livros do db dando get
      const [livro, setLivro] = useState([]);
      
      // constante que atualiza a lista dos livros
      const [atualizar, setAtualizar] = useState();

      const [livroSelecionado, setLivroSelecionado] = useState({});

      const genero = ["Romance", "Aventura","Fábula","Ficção","História","Biologia","Ação e Aventura",
      "Ficção Científica","Bibliografia","Fantasia","Cordel","Fotografia","Autoajuda","Artes"]

      
      useEffect(() => {
          axios.get("http://localhost:8080/api/livros/").then((result)=>{
            setLivro(result.data);
          });
      },[atualizar]);

      
    function hadleChangeLivro(event) {
        setLivroSelecionado({ ...livroSelecionado, [event.target.name]: event.target.value });
      }


      function handleSubmit(event) {
        event.preventDefault();
        if (livroSelecionado.id === undefined) {
          axios
            .post('http://localhost:8080/api/livros/', livroSelecionado)
            .then((result) => {
              setAtualizar(result);
            });
        } else { 
          axios
            .put('http://localhost:8080/api/livros/', livroSelecionado)
            .then((result) => {
              setAtualizar(result);
            });
        }
        limparFormulario(); // Limpar o formulário após a submissão
      }
      
      function limparFormulario() {
        setLivroSelecionado({});
      }

  function excluir(id){
    axios.delete("http://localhost:8080/api/livros/"+id).then(result => {
      setAtualizar(result);
    });
  }


    // Exibição da página com formulário para inserção dos dados e lista de livros

    //input em formato de botão submit inseri os dados

    //tabela retorna os dados do db com botão para alterar e exluir
  return (
      <div className="container"> <br/>
        <h1> Cadastrar Livro</h1> 
        <form onSubmit={handleSubmit}>
          <div className="col-5">
            <div>
              <label className="form-label">Título:</label>
              <input onChange={hadleChangeLivro} 
              value={livroSelecionado.titulo || ''} 
              name="titulo" type="text" className="form-control"/>
            </div>
            <div>
              <label className="form-label">Autor:</label>
              <input onChange={hadleChangeLivro} value={livroSelecionado.autor || ''}
              name="autor" type="text" className="form-control"/>
            </div>
            <div>
            <label className="form-label">Gênero:</label>
            <select 
              onChange={hadleChangeLivro} value={livroSelecionado.genero || ''} 
              name="genero" type="text" className="form-control">
              
              <option value="-" >Selecione o gênero</option>
              {genero.map(item => {
                return <option value={item}>{item}</option>
              })}
            </select>
            </div>
            <div>
              <label className="form-label">Número de Páginas:</label>
              <input onChange={hadleChangeLivro} value={livroSelecionado.nmr_pagina || ''} 
              name="nmr_pagina" type="number" className="form-control"/>
            </div>
            <div>
              <label className="form-label">Ano da Edição:</label>
              <input onChange={hadleChangeLivro} value={livroSelecionado.ano_edicao || ''} 
              name="ano_edicao" type="text" className="form-control"/>
            </div>
            <br/> 
            <input type="submit" className="btn btn-success" value="Cadastrar"></input>
              
          </div>
        </form>
        <br/><br/><br/>
        
        <h2> Lista de Livros Cadastrados</h2><br/>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Título</th>
      <th scope="col">Autor</th>
      <th scope="col">Gênero</th>
      <th scope="col">Número de Páginas</th>
      <th scope="col">Ano de Edição</th>
      <th scope="col">Opções</th>
      <th scope="col"> </th>
    </tr>
  </thead>
  <tbody>
    {livro.map(livr => (
      <tr key={livr.id}>
        <td>{livr.titulo}</td>
        <td>{livr.autor}</td>
        <td>{livr.genero}</td>
        <td>{livr.nmr_pagina}</td>
        <td>{livr.ano_edicao}</td>
        <td>

          <button 
          onClick={()=>setLivroSelecionado(livr)} 
          className='btn btn-info'
          >Alterar
          </button> 
        </td>
        <td>
          <button 
          onClick={()=>excluir(livr.id)} 
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
  
  export default Livro;
