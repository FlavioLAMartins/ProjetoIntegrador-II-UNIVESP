import Styles from './Header.module.css'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  //Verificar se esta na pagina de login

  const isLoginPage = location.pathname === '/'

  return (
    <nav className={Styles.header}>
      <Link to="/home">
        <span>
          {' '}
          📚 Biblio Manager<h6>O seu gerenciador de biblioteca </h6>{' '}
        </span>
      </Link>
      {!isLoginPage && (
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/livro">Livros</Link>
          <Link to="/leitor">Leitor</Link>
          <Link to="/retirada">Retirada</Link>
        </nav>
      )}
    </nav>
  )
}

export default Header
