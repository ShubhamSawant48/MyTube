import { useEffect } from "react";
import LiveMessages from "./LiveMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import {
  generateAdjectiveNounUsername,
  generateShortMessage,
} from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const storeMessages = useSelector((store) => store.chat.messages);

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
    <div className="border border-black w-[493px] h-[30rem] mx-3 my-8 p-2 bg-slate-200">
      <h1 className="font-bold text-red-600 text-2xl mx-44">Live Chat:</h1>
      {storeMessages.map((mess) => (
        <LiveMessages name={mess.name} message={mess.message} />
      ))}
    </div>
  );
};

export default LiveChat;
