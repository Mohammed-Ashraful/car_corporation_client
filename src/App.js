import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AuthProvider from './Contexts/AuthProvider';
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import AboutUs from "./pages/Home/AboutUs/AboutUs";
import BuyCar from "./pages/Home/BuyCar/BuyCar";
import Contact from "./pages/Home/Contact/Contact";
import AllCar from "./pages/Home/Home/AllCar";
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Register from './pages/Login/Register/Register';
import NotFound from "./pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Register />
            </Route>

            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path="/allcar">
              <AllCar />
            </Route>

            <Route path="/about">
              <AboutUs/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            
            <Route path="/car/:id">
             <BuyCar></BuyCar>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
              </Route>
          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
