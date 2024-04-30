import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"


const Home = () => {
  const navigation = useNavigate();
  return (
<motion.div
 initial={{ opacity: -1, scale: 0 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.8 }}
 whileHover={{ scale: 1.08 }}
 whileTap={{ scale: 1 }}
>
    <div className={styles.home}>
          <div className={styles.soueu}>
          <h1>Oi, sou o Emerson</h1>
          <h3>Sou Desenvolvedor FullStack em Web, React, JS! </h3>
          <p>Veja alguns dos meus projetos nesta página!</p>
          <p>Algumas das minhas redes sociais abaixo.</p>
              <a href='https://www.linkedin.com/in/emerson-costa-155b57167/'><img src="./linkedin.png"/></a>  <a href='https://www.instagram.com/emerson_coosta/'><img src="./insta.png"/></a> <a href='https://github.com/EmersonCosttata/'><img src="./github.png"/></a>
              <button onClick={()=>navigation('/projects')}>Veja meus projetos</button>
        </div>
    </div> </motion.div>
  )
}

export default Home
