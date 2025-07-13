import { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_VIDEOS } from "../utils/constants";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";

const VideosList = () => {
  const [youTubeData, setYouTubeData] = useState(null);
  const dispatch = useDispatch();

  const getUtubeInfo = async () => {
    const data = await fetch(YOUTUBE_POPULAR_VIDEOS);
    const json = await data.json();
    setYouTubeData(json.items);
  };

  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };

  useEffect(() => {
    !youTubeData && getUtubeInfo();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap gap-5 px-6 w-[81rem] mx-10 mt-4 overflow-y-auto h-[33rem] scrollbar-hide">
        {youTubeData &&
          youTubeData.map((card) => (
            <Link
              to={"/watch?v=" + card.id}
              onClick={handleCloseMenu}
              key={card.etag}
            >
              <VideoCards data={card} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default VideosList;
