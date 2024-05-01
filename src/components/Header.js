import React,{useState} from 'react'
import styles from './Header.module.css'
import SignIn from './SignIn'
import Filters from './Filters';
import Register from './Register';

function Header() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  return (
    <>
    <nav className={styles.header}>
      <div className={styles.header_logo}>
      <h2>SwipTory</h2>
      </div>
      <div className={styles.header_options}>
        <button className={`${styles.header_button} ${styles.header_btn_one}`}onClick={() => {
          setRegister(true);
        }}>Register Now</button>
        <button className={`${styles.header_button} ${styles.header_btn_two}`} onClick={() => {
          setLogin(true);
        }}>Sign in</button>
      </div>
    </nav>
      <Filters/>
      {login && (
        <SignIn
          onClose={() => {
            setLogin(false);
          }}
        />
      )}

      {register && (
        <Register
          onClose={() => {
            setRegister(false);
          }}
        />
      )}
    </>
  )
}

export default Header