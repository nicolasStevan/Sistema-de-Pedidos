import Head from 'next/head';
import styles from '../../styles/home.module.scss';
import { Input } from '../components/ui/input/index'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Amigo Pizza, Faça o Seu Login
        </title>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
      </Head>
      <div className={styles.containerCenter}>
        <h1>
        <span className={styles.amigo}>Amigo</span>{' '}
        <span className={styles.pizza}>Pizza</span>
        </h1>
        <p>Faça o seu login para continuar</p>
        <div>
            <form action="">
              <Input 
              placeholder='Digite seu e-mail'
              type='text'
              />
              <Input 
              placeholder='Digite sua senha'
              type='password'
              />
            </form>
        </div>
      </div>
    </>
  );
}