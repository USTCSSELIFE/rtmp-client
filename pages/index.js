import Head from "next/head";
import Link from "next/link";
import Video from "../components/Video";

const Home = ({ records, liveAddress }) => {
  return (
    <>
      <Head>
        <title>Live Stream</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold mt-5">Live Stream</h1>
        <main className="flex flex-row items-start w-full justify-around flex-1 px-2 text-center mt-5">
          <div>
            <Video videoUrl={liveAddress} />
          </div>

          <div className="flex flex-col flex-wrap">
            {records.map((record) => (
              <Link href={`/record/${record}`} key={record}>
                <a className="p-4 mb-2 text-left border w-96 rounded-xl hover:text-gray-400 focus:text-gray-600">
                  <h3 className="text-xl font-bold">{record}</h3>
                </a>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps = async (ctx) => {
  const data = await fetch(`${process.env.RECORD_ADDRESS}/records`)
    .catch((error) => alert(error))
    .then((res) => res.json())
    .catch((error) => console.log(error));

  return {
    props: {
      records: data.videos,
      liveAddress: process.env.LIVE_ADDRESS,
    },
  };
};
