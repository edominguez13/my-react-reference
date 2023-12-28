//for all the functionality of the react player
// import ReactPlayer from "react-player";

// Only for youtube functionality
import ReactPlayer from "react-player/youtube";

const MyVideo = () => {
    const video_url = 'https://www.youtube.com/watch?v=p37_Ux1G_BI'
    return (
        <>
            <h2>Importing videos using react-player</h2>
            <p>if you want to use this package you have to run the command 'npm install react-player'</p>

            <ReactPlayer url={video_url} />

            <h2> Importing videos using the video html tag, for local assets</h2>
            <video src={video_url} controls width={400} height={200}></video>
        </>

    );
};

export default MyVideo;
