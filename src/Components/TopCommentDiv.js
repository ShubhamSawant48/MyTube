import CommentReplies from "./CommentReplies";

const TopCommentDiv = ({ info }) => {
  const { authorProfileImageUrl, authorDisplayName, textOriginal } =
    info?.snippet?.topLevelComment?.snippet;

  return (
    <div>
      <div className="flex bg-gray-100 mb-3 rounded-lg">
        <img
          src={authorProfileImageUrl}
          className="h-16 w-16 rounded-full p-3"
        ></img>
        <div>
          <h2 className="font-bold text-lg">{authorDisplayName}</h2>
          <h3>{textOriginal}</h3>
        </div>
      </div>
      <CommentReplies data={info} />
    </div>
  );
};

export default TopCommentDiv;
