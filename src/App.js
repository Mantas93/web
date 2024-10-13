import './App.css';
import { BrowserRouter, Switch, Routes, Route, Redirect, Link } from "react-router-dom";

import Home from './pages/Home';
import Galery from './pages/Galery';
import About from './pages/About';
import Error from './pages/Error';



const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to={'/'}  >Home</Link><br />
          <Link to={'/galery'} >Galery</Link> <br />
          <Link to={'/about'} >About</Link>
        </nav>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/galery" component={Galery} exact />
          <Route path="/about" component={About} exact />
          <Route path="/error" component={Error} exact />
          <Redirect to="/error" component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
