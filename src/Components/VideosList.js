import { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../utils/constants";
import VideoCards from "./VideoCards";

const VideosList = () => {
  const [youTubeData, setYouTubeData] = useState(null);
  const getUtubeInfo = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    setYouTubeData(json.items);
  };

  useEffect(() => {
    !youTubeData && getUtubeInfo();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap gap-5 px-6 w-[81rem] ml-10 mt-4 overflow-y-auto h-[33rem] scrollbar-hide">
        {youTubeData &&
          youTubeData.map((card) => <VideoCards key={card.etag} data={card} />)}
      </div>
    </div>
  );
};

export default VideosList;
