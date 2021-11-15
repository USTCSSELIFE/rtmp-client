import ReactPlayer from "react-player";
const Video = ({ videoUrl }) => {
  return <>{<ReactPlayer url={videoUrl} playing={true} controls={true} />}</>;
};

export default Video;
