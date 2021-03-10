import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './componant/Header/Header';
import LeaguesList from './componant/LeaguesList/LeaguesList';
import LeagueDetails from './componant/LeagueDetails/LeagueDetails';

function App() {
  return (
    <>
      <Header></Header>

      <Router>
        <Switch>
          <Route path='/league/:leagueId'>
            <LeagueDetails></LeagueDetails>
          </Route>
          <Route exact path='/'>
            <LeaguesList></LeaguesList>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
