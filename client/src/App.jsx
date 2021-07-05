import { Route , Switch} from "react-router";
import Details from "./Pages/Details";
import Home from "./Pages/Home";
import Update from "./Pages/Update";

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/trips/:id" component={Details}/>
        <Route exact path="/trips/:id/update" component={Update}/>
      </Switch>
    </div> 
  );
};

export default App;
