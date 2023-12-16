import axios from "axios";
import "./VideoPage.css";
import { useCallback, useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Context } from "../../settings/Context/Context";
import YouTube from "react-youtube";

export const VideoPage = () => {
  const [loading, setLoading] = useState(true);
  const opts = {
    width: 900,
    height: 400,
  };
  const { pathname } = useLocation();
  const { videoPageData, setVideoPageData } = useContext(Context);
  const { id } = useParams();
  const handleGetVideo = useCallback(async () => {
    try {
      const request = await axios.get(
        "https://youtube-v31.p.rapidapi.com/videos",
        {
          params: {
            part: "contentDetails,snippet,statistics",
            id,
          },
          headers: {
            "X-RapidAPI-Key":
              "76c4d4062amsh6f2d77628f2a298p18c270jsna8f6612ae9f1",
            "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
          },
        }
      );
      const response = await request.data;
      setVideoPageData(response?.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      return error;
    }
  }, [id]);

  useEffect(() => {
    handleGetVideo();
  }, [handleGetVideo]);

  if (loading) {
    return (
      <div className="lds-ring loading_lds">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return (
    <div className="video__page">
      <div className="video_page__inner">
        <YouTube videoId={id} opts={opts} />

        {videoPageData?.map((item, index) => (
          <div key={index}> 
            <h1>{item?.snippet?.title}</h1>
          </div>
        ))}          

        <div className="video_page__data"></div>
      </div>
    </div>
  );
};

export default VideoPage;
