import Head from "next/head";
import Image from "next/image";
import homeStyles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kim Jinwoo</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[Kim jw Intoduction]</p>
        <p>(This is a website)</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2>Blog</h2>
        <ul></ul>
      </section>
    </div>
  );
}
