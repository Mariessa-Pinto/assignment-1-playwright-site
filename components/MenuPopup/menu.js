import { useState } from "react";
import styles from './Menu.module.css'

export default function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    
    return (
        <>
          <img onClick={() => {
              setMenuOpen(!menuOpen);
            }} className={styles.menu} src='/icons/menu-icon.png'></img>
              
              {
                menuOpen ? <>
                <div className={styles.fullMenu}><h1 onClick={() => {
                  setMenuOpen(!menuOpen);
                }} className={styles.x}>X</h1>
                <ul className={styles.openMenu}>
                  <li className={styles.menuItem}><a href="/" className={styles.text}>Home</a></li>
                  <li className={styles.menuItem}><a href="/about" className={styles.text}>About</a></li>
                  <li className={styles.menuItem}><a href="/contact" className={styles.text}>Contact</a></li>
                </ul></div>
                </> : <></>
              }
            
                
        </>
    )
}