'use client';
import Image from 'next/image'
import styles from './page.module.css'
import Main from '@/app/components/Main'; // Import the Header component
import { Theme } from '@/theme/Theme'
//import AdapterJalali from '@date-io/date-fns-jalali'
//import { LocalizationProvider } from '@mui/x-date-pickers'
//import AdapterDayjs from '@date-io/dayjs' 
import AdapterJalali from '@date-io/date-fns-jalali'
//import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
//import AdapterJalali from '@mui/x-date-pickers/AdapterJalali'; // Correct import
//import { LocalizationProvider } from '@mui/x-date-pickers'
//import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs
import { LocalizationProvider } from '@mui/x-date-pickers';
import AdapterDateFns from '@mui/x-date-pickers/AdapterDateFns'; // Import the date adapter

export default function Home() {
  return (


    //  <LocalizationProvider dateAdapter={AdapterJalali}>

    <Theme>
  
  
       <main className={styles.main}>
          <Main />
        </main>
      

    </Theme>

    //  </LocalizationProvider>

  )
}
