import { useSearchParams } from "react-router-dom";
import TopComments from "./TopComments";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  return (
    <div className="my-8 ml-36">
      <div>
        <iframe
          width="860"
          height="500"
          className="rounded-3xl"
          src={
            "https://www.youtube.com/embed/" +
            searchParams.get("v") +
            "?autoplay=1&loop=1&mute=1&si=Q4Sm9L7I54_KS025"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <TopComments />
    </div>
  );
};

export default WatchPage;
