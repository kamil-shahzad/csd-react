import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import News from './components/New/News'
import { Switch } from 'react-router-dom';

function App() {
  return (
    <Router>


    

<Switch>
<Route exact to path ="/" component={Home}/>
      <Route path ="/dashboard" component={Dashboard}/>
      <Route path ="/news" component={News}>

      </Route>
  </Switch>
    </Router>
  );
}
export default App;
