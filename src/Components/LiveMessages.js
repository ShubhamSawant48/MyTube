import { LIVECHAT_PROFILE_PHOTO } from "../utils/constants";
import { generateAdjectiveNounUsername, generateShortMessage } from "../utils/helper";

const LiveMessages = () => {
    return (
        <div className="flex">
        <div>
          <img
            src={LIVECHAT_PROFILE_PHOTO}
            className="w-8 h-8 rounded-full mt-1"
          ></img>
        </div>
        <div className="mx-1">
          <h2 className="text-sm font-semibold">{generateAdjectiveNounUsername()}</h2>
          <h3 className="text-sm">{generateShortMessage()}</h3>
        </div>
      </div>
    );
};

export default LiveMessages;