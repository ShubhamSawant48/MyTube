import {
  HAMBURGER_MENU_ICON,
  YOUTUBE_LOGO,
  USERPROFILE_ICON,
} from "../utils/constants";

const Header = () => {
  return (
    <div className="flex p-3 shadow-xl">
      <div className="flex gap-4 col-span-1 mr-[22%] ml-1">
        <img
          src={HAMBURGER_MENU_ICON}
          alt="Hamburger menu icon"
          className="h-8 rounded-sm cursor-pointer"
        ></img>
        <img
          src={YOUTUBE_LOGO}
          alt="Youtube logo"
          className="h-8 cursor-pointer"
        ></img>
      </div>
      <div className="flex mr-auto">
        <input
          placeholder="Search Here"
          className="bg-gray-100 border border-black rounded-l-full px-4 py-2 w-[500px]"
        ></input>
        <button className="rounded-r-full bg-gray-300 border border-black px-6 py-2">
          🔍
        </button>
      </div>
      <div>
        <img src={USERPROFILE_ICON} className="h-10 mr-2"></img>
      </div>
    </div>
  );
};

export default Header;
