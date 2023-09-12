import React, {useEffect,useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

// função principal da página leitor
function Login() {

      // constante querecebe o leitor do db dando get
      const [admin, setAdmin] = useState([]);
      
      // constante que atualiza a lista dos leitores
      const [atualizar, setAtualizar] = useState();

      const [adminSelecionado, setAdminSelecionado] = useState({});

      // função  que obtém os leitores do db dando get e armazena os dados na colouna
      useEffect(() => {
        axios.get("http://localhost:8080/api/admin/").then((result) => {
          setAdmin(result.data);
        });
      }, [atualizar]);

      
    function hadleChangeLivro(event) {
        setAdminSelecionado({ ...adminSelecionado, [event.target.name]: event.target.value });
      }


    function handleSubmit(event) {
        event.preventDefault();
        if (adminSelecionado.id === undefined) {
          console.log('Inserir');
          axios
            .post('http://localhost:8080/api/admin/', adminSelecionado)
            .then((result) => {
              setAdmin([...admin, result.data]); // Adicionar novo admin ao estado
            });
        } else {
          axios
            .put('http://localhost:8080/api/admin/', adminSelecionado)
            .then((result) => {
              const updatedAdmins = admin.map((objt) => {
                if (objt.id === result.data.id) {
                  return result.data;
                }
                return objt;
              });
              setAdmin(updatedAdmins); // Atualizar admin específico no estado
            });
        }
        function limparFormulario() {
            setAdminSelecionado({});
          }
          
        limparFormulario();
      }

      function excluir(id) {
        axios.delete("http://localhost:8080/api/admin/" + id).then((result) => {
          const updatedAdmins = admin.filter((objt) => objt.id !== id);
          setAdmin(updatedAdmins); // Remover admin excluído do estado
        });
      }

    // Exibição da página com formulário para inserção dos dados e lista de leitores

    //input em formato de botão submit inseri os dados

    //tabela retorna os dados do db com botão para alterar e exluir
  return (
      <div className="container"> <br/> <br/>
        <h3> Seja bem vindo!</h3>
        <h3> Faça o login para acessar o sistema</h3>
        <form onSubmit={handleSubmit}>
          <div className="col-3">
            <div>
              <label className="form-label">Usuário:</label>
              <input onChange={hadleChangeLivro} 
              value={adminSelecionado.nome || ''} 
              name="nome" type="text" className="form-control"/>
            </div>
            <div>
              <label className="form-label">Senha:</label>
              <input onChange={hadleChangeLivro} 
              value={adminSelecionado.senha || ''} 
              name="senha" type="text" className="form-control"/>
            </div>
            
            <br/> 
            <Link className='btn btn-info'to="/home">Acessar</Link>          
          </div>
        </form>
        <br/>
      </div>
    );
  }
  
  export default Login;