import styles from './SkillContainer.module.css'
import { motion } from 'framer-motion'

const SkillContainer = ({image, skill}) => {
  return (
    <motion.div
    whileHover={{ scale: 1.3 }}
    whileTap={{ scale: 0.9 }}> 
    <div className={styles.container}>
      <img src={image}></img>
      <h4>{skill}</h4>
    </div>
    
    </motion.div>
  )
}

export default SkillContainer
