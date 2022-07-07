import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hank Tutorial</title>
      </Head>
      <Link href="/about">About</Link>
      <h1>Hello world</h1>
    </div>
  );
}
