import { LIVECHAT_PROFILE_PHOTO } from "../utils/constants";

const CommentRepliesDiv = ({ info }) => {
  const { authorProfileImageUrl, authorDisplayName, textOriginal } =
    info.snippet;
  return (
    <div className="flex bg-gray-100 mb-3 rounded-lg">
      <img
        src={authorProfileImageUrl}
        className="h-16 w-16 rounded-full p-3"
      ></img>
      <div>
        <h2 className="font-bold text-lg">{authorDisplayName}</h2>
        <h3 className="">{textOriginal}</h3>
      </div>
    </div>
  );
};

export default CommentRepliesDiv;
