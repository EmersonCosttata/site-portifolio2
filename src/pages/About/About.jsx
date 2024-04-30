import styles from './About.module.css'
import { motion } from "framer-motion"
const About = () => {
  return (
              <motion.div
          initial={{ opacity: -1, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
    <div className={styles.about}>
     <div><img src="https://i.ytimg.com/vi/ou0u4aenhBU/maxresdefault.jpg"></img></div>
        <div className={styles.texto}>
            <h2>Sou Emerson, Desenvolvedor Web FullStack</h2>
            <h3>Atuo na area a mais de 1 anos desenvolvendo aplicações web com React, JS, TS, CSS, Boostrap e outros...</h3>
            <p>Formado em tecnico em informatica pelo CIMOL, aonde descobri o gosto pela area de DEV</p>
            <p>Parte da minha vida profissional atuei com bordados eletrônicos. Entretanto, encontrei minha verdadeira paixão na programação, área que, inclusive, já estudei academicamente e também em formações complementares. </p>
            <h3>Busca uma aplicação para sua Empresa ou Negocio? Eu te posso ajudar!</h3>
        </div>
    </div>
          </motion.div>
  )
}

export default About
