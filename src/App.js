import './App.css';
import HomePage from './pages/HomePage';
import EditProduct from './pages/EditProduct';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/:id" component={EditProduct}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
