import { useSearchParams } from "react-router-dom";
import { YOUTUBE_TOP_COMMENTS } from "../utils/constants";
import { useEffect, useState } from "react";
import TopCommentDiv from "./TopCommentDiv";

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
      {topCommentsData &&
        topCommentsData.map((data) => (
          <TopCommentDiv key={data.id} info={data} />
        ))}
    </div>
  );
};

export default TopComments;
