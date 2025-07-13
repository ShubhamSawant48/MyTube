import { useSearchParams } from "react-router-dom";
import { YOUTUBE_TOP_COMMENTS } from "../utils/constants";
import { useEffect, useState } from "react";

const TopComments = () => {
  const [searchParams] = useSearchParams();
  const [topCommentsData, setTopCommentsData] = useState();

  const userCommentData = async () => {
    const data = await fetch(YOUTUBE_TOP_COMMENTS + searchParams.get("v"));
    const json = await data.json();
    const promise = await Promise.resolve(json.items);
    setTopCommentsData(promise);
  };

  useEffect(() => {
    userCommentData();
  }, []);

  return (
    <div className="mt-3">
      <h1 className="font-bold text-2xl">20 Comments:</h1>
      {topCommentsData &&
        topCommentsData.map((data) => {
          <div>
            <img
              src={data.snippet.topLevelComment.snippet.authorProfileImageUrl}
              className="h- w-8 flex-row"
            ></img>
            ;
          </div>;
        })}
    </div>
  );
};

export default TopComments;
