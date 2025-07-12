import ButtonsList from "./BottonsList";
import VideosList from "./VideosList";

const MainContainer = () => {
  return (
    <div>
      <div className="px-2 py-3 mt-3">
        <ButtonsList />
      </div>
      <VideosList />
    </div>
  );
};

export default MainContainer;
