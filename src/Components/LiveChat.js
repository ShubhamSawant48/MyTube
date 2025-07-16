import { useEffect, useState } from "react";
import LiveMessages from "./LiveMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import {
  generateAdjectiveNounUsername,
  generateShortMessage,
} from "../utils/helper";
import { SEND_ICON } from "../utils/constants";

const LiveChat = () => {
  const dispatch = useDispatch();
  const storeMessages = useSelector((store) => store.chat.messages);
  const [inputOfLiveChat, setInputOfLiveChat] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateAdjectiveNounUsername(),
          message: generateShortMessage(),
        })
      );
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1 className="w-full mx-3 text-red-700 font-bold text-2xl mt-5 mb-3">
        Live Chat:
      </h1>
      <div className="border border-x-black border-t-black w-full h-[30rem] mx-3 p-2 bg-slate-200 overflow-y-auto flex flex-col-reverse rounded-t-lg">
        {storeMessages.map((mess, i) => (
          <LiveMessages key={i} name={mess.name} message={mess.message} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ name: "Shubham", message: inputOfLiveChat }));
          setInputOfLiveChat("");
        }}
      >
        <div className="w-full mx-3 py-2 bg-slate-200 border border-x-black rounded-b-lg border-b-black">
          <input
            type="text"
            value={inputOfLiveChat}
            onChange={(e) => setInputOfLiveChat(e.target.value)}
            className="border-black border-2 rounded-full p-1 w-[280px] ml-3 mr-8"
            placeholder="Enter your Message:"
          ></input>
          <button className="w-9 h-6">
            <img src={SEND_ICON}></img>
          </button>
        </div>
      </form>
    </div>
  );
};
export default LiveChat;
