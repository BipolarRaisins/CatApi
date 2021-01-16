import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Vote from "./components/Vote";
import Images from "./components/Images";
import Favourites from "./components/Favourites";
import Upload from "./components/Upload";
import CatBrowser from "./components/cat_browers"
import CatDetail from "./components/cat_detail"




function App() {
  return (
    <Router>
      <div className="app">
      <Header />
      <Switch>
          <Route exact path="/">
            <Vote />
          </Route>
          <Route path="/images" component={Images}/>
          <Route path="/favourites" component={Favourites}/>
          <Route path="/upload" component={Upload}/>
          <Route path="/breed" component={CatBrowser}/>
          <Route path="/:id" component={CatDetail} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
