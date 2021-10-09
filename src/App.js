import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Indian from './components/Indian/Indian';
import FoodCategory from './components/FoodCategory/FoodCategory';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Detail from './components/Detail/Detail';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/indian-food">
            <Indian></Indian>
          </Route>
          <Route path="/categories">
            <FoodCategory></FoodCategory>
          </Route>
          <Route path="/category/:nameId">
            <Detail></Detail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
