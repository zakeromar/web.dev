'use client';
import styles from './page.module.css'
import Main from '@/app/components/Main'; 
import { Theme } from '@/theme/Theme'

export default function Home() {
  return (

    <Theme>
      <main className={styles.main}>
        <Main />
      </main>
    </Theme>

  )
}
