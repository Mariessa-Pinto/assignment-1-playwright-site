import MenuPopUp from '../MenuPopup/menu'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <>
          <div className={styles.navBar}>
            <MenuPopUp/>
          <img className={styles.gradHat} src='/icons/graduation-hat.png'></img>
        </div>
        </>
    )
}