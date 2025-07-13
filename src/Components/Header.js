import { useDispatch, useSelector } from "react-redux";
import {
  HAMBURGER_MENU_ICON,
  YOUTUBE_LOGO,
  USERPROFILE_ICON,
  YOUTUBE_SUGGESTION_API,
} from "../utils/constants";
import { toggleShowMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { addCacheResults } from "../utils/cacheSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState([]);
  const [showSearchQuery, setShowSearchQuery] = useState(false);
  const dispatch = useDispatch();
  const cacheInfo = useSelector((store) => store.cache);

  const handleToggleShowMenu = () => {
    dispatch(toggleShowMenu());
  };

  const getQuerySuggestion = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setShowSuggestion(json[1]);

    dispatch(
      addCacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheInfo[searchQuery]) {
        setShowSuggestion(cacheInfo[searchQuery]);
      } else {
        getQuerySuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="flex p-3 shadow-xl">
      <div className="flex gap-4 col-span-1 mr-[22%] ml-1">
        <img
          src={HAMBURGER_MENU_ICON}
          alt="Hamburger menu icon"
          className="h-8 rounded-sm cursor-pointer"
          onClick={handleToggleShowMenu}
        ></img>
        <Link to="/">
          <img
            src={YOUTUBE_LOGO}
            alt="Youtube logo"
            className="h-8 cursor-pointer"
            onClick={handleToggleShowMenu}
          ></img>
        </Link>
      </div>
      <div className="flex mr-auto">
        <input
          placeholder="Search Here"
          type="text"
          className="bg-gray-100 border border-black rounded-l-full px-4 py-2 w-[500px]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSearchQuery(true)}
          onBlur={() => setShowSearchQuery(false)}
        ></input>
        <button className="rounded-r-full bg-gray-300 border border-black px-6 py-2">
          🔍
        </button>
      </div>
      {showSearchQuery && (
        <div
          className="w-[490px] h-auto top-14 left-[490px] fixed "
          onFocus={() => setShowSearchQuery(true)}
          onBlur={() => setShowSearchQuery(false)}
        >
          <ul className="">
            {showSuggestion.map((suggest) => (
              <li key={suggest} className="bg-gray-100 px-4 rounded-lg py-3">
                🔍 {suggest}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <img src={USERPROFILE_ICON} className="h-10 mr-2"></img>
      </div>
    </div>
  );
};

export default Header;
