import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>
      <a  href='/' className={styles.logo}> <p > Emerson Portifolio.</p></a>
      <nav className={styles.nav}>
           <NavLink to="/">Home</NavLink>
           <NavLink to="/skills">Skills</NavLink>
           <NavLink to="/projects">Projetos</NavLink>
            <NavLink to="/about">Sobre mim</NavLink>
      </nav>
    </header>
  )
}

export default Header
