import "./App.css";
import ScoreBoard from "./components/ScoreBoard";
import Hands from "./components/Hands";
import Contest from "./components/Contest";
import { useSelector } from "react-redux";
import { selectUserHand } from "./slices/gameSlice";

function App() {
  const userHand = useSelector(selectUserHand);
  return (
    <div className="app">
      <ScoreBoard />
      {!userHand ? <Hands /> : <Contest />}
    </div>
  );
}

export default App;
