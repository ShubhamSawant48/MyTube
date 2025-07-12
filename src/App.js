import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import SideBar from "./Components/SideBar";
import VideosList from "./Components/VideosList";

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <SideBar />
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
