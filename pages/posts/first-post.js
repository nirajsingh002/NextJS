import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost({ buildTimestamp }) {
  return (
    <Layout>
      <Head>
        <title>First Posts</title>
      </Head>
      <h1>First Post</h1>

      <Link href="/">
        <a>Back to home</a>
      </Link>
      <div>App built at: {buildTimestamp}</div>
      <div>
        <Image
          src="/images/profile.jpg"
          height={144}
          width={144}
          alt="profile image"
        ></Image>
      </div>
    </Layout>
  );
}

export const getStaticProps = () => {
  return {
    props: {
      buildTimestamp: Date.now(),
    },
  };
};
