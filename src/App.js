import "./App.css";
import Hands from "./components/Hands";
import Contest from "./components/Contest";
import { useSelector } from "react-redux";
import { selectUserHand } from "./slices/gameSlice";
import { selectUserName } from "./slices/userSlice";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import ScoreBoard from "./components/ScoreBoard";
import Header from "./components/Header";

function App() {
  const userHand = useSelector(selectUserHand);
  const userName = useSelector(selectUserName);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Header />
            <ScoreBoard />
            {!userHand ? <Hands /> : <Contest />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
