import Head from "next/head";
import Link from "next/link";
import Video from "../components/Video";

export default function Home({ records, liveAddress }) {
  return (
    <>
      <Head>
        <title>Live Stream</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">Live Stream</h1>
          <div className="flex flex-row m-2 flex-wrap">
            {records.map((record) => (
              <Link href={`/record/${record}`} key={record}>
                <a className="flex flex-col items-center justify-center p-2">
                  <p className="text-2xl">{record}</p>
                </a>
              </Link>
            ))}
          </div>
          <Video videoUrl={liveAddress} />
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const data = await fetch(`${process.env.RECORD_ADDRESS}/records`)
    .catch((error) => console.log(error))
    .then((res) => res.json());

  return {
    props: {
      records: data.videos,
      liveAddress: process.env.LIVE_ADDRESS,
    },
  };
};
