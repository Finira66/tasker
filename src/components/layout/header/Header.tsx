import Link from 'next/link';
import styles from './Header.module.scss'

const Header = () => {
  return <header className={styles.header}>
    <nav className={styles.nav}>
      <Link href='/'>Home</Link>
      <Link href='/tasks'>My tasks</Link>
    </nav>
  </header>
}

export default Header;