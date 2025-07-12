import { HAMBURGER_MENU_ICON, YOUTUBE_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div>
      <div>
        <img src={HAMBURGER_MENU_ICON} alt="Hamburger menu icon"></img>
        <img src={YOUTUBE_LOGO} alt="Youtube logo"></img>
      </div>
    </div>
  );
};

export default Header;
