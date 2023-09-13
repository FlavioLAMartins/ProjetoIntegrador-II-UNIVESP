import Styles from './Header.module.css'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  //Verificar se esta na pagina de login

  const isLoginPage = location.pathname === '/'

  return (
    <nav className={Styles.header}>
      <Link to="/home" className={Styles.logo}>
        <span>📚 Biblio Manager</span>
      </Link>
      {!isLoginPage && (
        <nav>
          <ul>
            <li
              className={location.pathname === '/home' ? Styles.selected : ''}
            >
              <Link to="/home">Home</Link>
            </li>
            <li
              className={location.pathname === '/livro' ? Styles.selected : ''}
            >
              <Link to="/livro">Livros</Link>
            </li>
            <li
              className={location.pathname === '/leitor' ? Styles.selected : ''}
            >
              <Link to="/leitor">Leitor</Link>
            </li>
            <li
              className={
                location.pathname === '/retirada' ? Styles.selected : ''
              }
            >
              <Link to="/retirada">Retirada</Link>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  )
}

export default Header
