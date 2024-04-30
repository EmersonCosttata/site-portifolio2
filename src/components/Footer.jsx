import styles from './Footer.module.css'

const Footer = () => {
    return (
    <footer className={styles.footer}> 
      
    <p>2024&copy; por Emerson Costa</p>
    <div>
    <a href='https://www.linkedin.com/in/emerson-costa-155b57167/'><img src="./linkedin.png"/></a>  
    <a href='https://www.instagram.com/emerson_coosta/'><img src="./insta.png"/></a> 
    <a href='https://github.com/EmersonCosttata/'><img src="./github.png"/></a>
    </div>
      </footer>
  )
}

export default Footer

      
  