import Video from "../../components/Video";
import Head from "next/head";

const Id = ({ videoUrl }) => {
  return (
    <>
      <Head>
        <title>Record</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-start justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-start w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold mt-5">Record</h1>
          <Video videoUrl={videoUrl} />
        </main>
      </div>
    </>
  );
};

export default Id;

export const getServerSideProps = (ctx) => {
  const { params } = ctx;
  return {
    props: {
      videoUrl: `${process.env.RECORD_ADDRESS}/record/${params.id}`,
    },
  };
};
