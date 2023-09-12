import React, {useEffect,useState} from 'react';
import {Link} from "react-router-dom";

// função principal da página Livro
function Home() {

      
    // Exibição da página com formulário para inserção dos dados e lista de livros

    //input em formato de botão submit inseri os dados

    //tabela retorna os dados do db com botão para alterar e exluir
  return (
    <div className="container">
        <br/><br/><br/><br/>
      <h1> Acesso aos Serviços</h1> <br/>
        <table class="table">
                <tbody>
                    <tr>
                        <td>Cadastramento de Livros</td>
                        <td>
                        <Link className='btn btn-info'to="/livro">Acessar</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Cadastramento de Leitores</td>
                        <td>
                        <Link className='btn btn-info'to="/leitor">Acessar</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Registro de Retiradas</td>
                        <td>
                        <Link className='btn btn-info'to="/retirada">Acessar</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Relatório de Devoluções</td>
                        <td>
                        <Link className='btn btn-info'to="/devolucao">Acessar</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Sair do Sisitema</td>
                        <td>
                        <Link className='btn btn-warning'to="/"> Log Out </Link> 
                        </td>
                    </tr>
                </tbody>
        </table>
        <br/><br/><br/><br/><br/>
    </div>
    );
  }
  
  export default Home;