import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout, { siteTitle } from "../components/Layout";
import utilStyle from "../styles/utils.module.css";
import { getPostsData } from "../lib/post";
import TwitterIcon from "@mui/icons-material/Twitter";

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyle.headingMd}>
        <p>
          Thank you for visiting my flower photo blog.
          <br />
          I am learning programming.
          <br />
          HTML/CSS/JavaScript/TypeScript/React/Next.js
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={utilStyle.title}>*My flower blog*</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, data, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage} />
              </Link>
              <Link href={`/posts/${id}`}>
                <a className={utilStyle.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilStyle.lightText}>@hiro99000203</small>
            </article>
          ))}
        </div>
      </section>
      <section>
        <h2>My Link</h2>
        Twitter
        <Link href="https://twitter.com/hiro99000203">
          <TwitterIcon className={styles.twitterIcon} />
        </Link>
      </section>
    </Layout>
  );
}
