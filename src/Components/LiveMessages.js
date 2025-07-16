import { LIVECHAT_PROFILE_PHOTO } from "../utils/constants";

const LiveMessages = ({ name, message }) => {
  return (
    <div className="flex">
      <img
        src={LIVECHAT_PROFILE_PHOTO}
        className="w-8 h-8 rounded-full mt-1"
      ></img>
      <div className="mx-1">
        <h2 className="text-sm font-semibold">{name}</h2>
        <h3 className="text-sm">{message}</h3>
      </div>
    </div>
  );
};

export default LiveMessages;
