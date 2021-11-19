import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import Register from './pages/Login/Register/Register';

import './App.css';
import AllCar from "./pages/Home/Home/AllCar";
import BuyCar from "./pages/Home/BuyCar/BuyCar";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import NotFound from "./pages/Shared/NotFound/NotFound";
import AboutUs from "./pages/Home/AboutUs/AboutUs";
import Contact from "./pages/Home/Contact/Contact";


function App() {
  return (
    <div style="App">
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
