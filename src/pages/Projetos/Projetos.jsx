import ProjectContainer from '../../components/ProjectContainer'
import styles from './Projetos.module.css'
import { motion } from "framer-motion"

const Projetos = () => {
  return (
    <motion.div
    initial={{ opacity: -1, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}>
    <div className={styles.proj}>
        <h1>Alguns dos meus projetos</h1>
          <p>*Alguns disponiveis em repositorios, outros estão em deploy, basta clicar pra ver!</p>
          <div className={styles.projeto}>
                <ProjectContainer projTitle ='SunshineAPP Streaming' ProjP='Site de Streaming de filmes e series ficiticio feito com React e CSS,  
                usando compomentes como router, modal, motion. Telas de Login, Cadastro, Pesquisa, 
                Informações do conteudo e Visualização do mesmo. Esse app consome um api para pupular filmes, e Firebase pra auth e banco de dados' image ="./sunshine.png" url='https://github.com/EmersonCosttata/'></ProjectContainer>

                <ProjectContainer projTitle ='Emer Blog Simples' ProjP='Um site simples em formato de blog com todas as paginas e funçoes funcionais! É possivel se cadastrar, logar, criar, editar e deletar posts, e ver todos os posts na home. Foram usados React, 
                CSS e no de Backend Firebase, para salvar dados e todo o sistema de login e cadastro.' image ="./emerblog.png" url='https://github.com/EmersonCosttata/'></ProjectContainer>

                < ProjectContainer projTitle ='Este site q você esta vendo' ProjP='Site simples e moderno com React e CSS, usando routas paras as paginas e motion pra algumas animações.' image ="./elemsm.png" url='https://github.com/EmersonCosttata/'></ProjectContainer>
          </div>
    </div></motion.div>
  )
}

export default Projetos