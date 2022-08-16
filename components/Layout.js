import styles from '../styles/Layout.module.css'
import Header from './Header'
const Layout = ({children}) => {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
            <Header/>
            {children}
        </main>
    </div>
  )
}

export default Layout
