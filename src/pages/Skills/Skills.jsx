import SkillContainer from '../../components/SkillContainer'
import styles from './Skills.module.css'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
        <motion.div
        initial={{ opacity: -1, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}> 

    <div className={styles.skills}>
      <h1>Algumas das minhas Habilidades!</h1>
      <h2>FrontEnd DEV</h2>
        <div className={styles.skills_contens}>

        <SkillContainer image='./react.png' skill="ReactJS"/>
    
        <SkillContainer image='./ts.svg' skill="TypeScript"/>
        
        <SkillContainer image='./css.svg' skill="CSS"/>

        <SkillContainer image='./bootstrap.png' skill="BootStrap"/>
        </div>

        <h2>Backend DEV</h2>
            <div className={styles.skills_contens}>
                <SkillContainer image='./firebase.png' skill="Firebase"/>
                <SkillContainer image='./mongodb.png' skill="MongoDB"/>
            </div>
    </div>
        </motion.div>
  )
}

export default Skills
