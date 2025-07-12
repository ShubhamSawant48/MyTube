import { BUTTONSOFMAIN } from "../utils/constants";
import Buttons from "./Buttons";

const ButtonsList = () => {
  return (
    <div className="flex overflow-x-auto w-[1300px] scrollbar-hide ml-3">
      {BUTTONSOFMAIN.map((button) => (
        <Buttons key={button} name={button} />
      ))}
    </div>
  );
};

export default ButtonsList;
