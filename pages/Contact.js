import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import moment from 'moment';

export default function Contact() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Contact Us</h1>
        <span>Hii Help Me Rio {moment('12/12/2012').format('DD-MM-YY')} </span>
      </div>
    </div>
  )
}
