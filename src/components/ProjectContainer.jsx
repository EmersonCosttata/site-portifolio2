import styles from './ProjectContainer.module.css'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
const ProjectContainer = ({projTitle,ProjP, image, url}) => {
  return (
    <div className={styles.container}>
       <motion.div
    whileHover={{ scale: 1.03, opacity:0.65}}
    whileTap={{ scale: 0.9 }}> 
    <div >
      <Link to={url}><img src={image}></img></Link>
      <h3>{projTitle}</h3>
      <p>{ProjP}</p>
    </div>
    </motion.div>
    </div>
  )
}

export default ProjectContainer
