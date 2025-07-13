import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const showMenuBar = useSelector((store) => store.app.showMenu);
  return !showMenuBar ? null : (
    <div className="overflow-y-auto scrollbar-hide w-[13rem] h-[629px] py-3 shadow-black shadow-lg">
      <ul className="border-gray-400 border-b-2 px-5 py-2 text-lg">
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <h1 className="font-bold text-lg px-5 py-2">Explore</h1>
      <ul className="border-gray-400 border-b-2 px-5 py-2">
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sport</li>
        <li>Courses</li>
        <li>Podcast</li>
      </ul>
      <h1 className="font-bold text-lg px-5 py-2">More From Youtube</h1>
      <ul className="border-gray-400 border-b-2 px-5 py-2">
        <li>Youtube Studio</li>
        <li>Youtube Premium</li>
        <li>Youtube Music</li>
        <li>Youtube Kids</li>
      </ul>
      <ul className="px-5 py-2 mb-2">
        <li>Setting</li>
        <li>Report History</li>
        <li>Help</li>
        <li>Send Feedback</li>
      </ul>
    </div>
  );
};

export default SideBar;
