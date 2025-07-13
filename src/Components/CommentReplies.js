import { YOUTUBE_REPLY_COMMENTS } from "../utils/constants";
import { useEffect, useState } from "react";
import CommentRepliesDiv from "./CommentRepliesDiv";
import TopCommentDiv from "./TopCommentDiv";

const CommentReplies = ({ data }) => {
  const [topCommentsData, setTopCommentsData] = useState();

  const userCommentData = async () => {
    const dataE = await fetch(YOUTUBE_REPLY_COMMENTS + data.id);
    const json = await dataE.json();
    const promise = await Promise.all(json.items);
    setTopCommentsData(promise);
  };

  useEffect(() => {
    data.snippet.totalReplyCount != 0 && userCommentData();
  }, []);

  return (
    <div className="mt-1 ml-5">
      {topCommentsData &&
        topCommentsData.map((data) => (
          <CommentRepliesDiv key={data.id} info={data} />
        ))}
    </div>
  );
};

export default CommentReplies;
