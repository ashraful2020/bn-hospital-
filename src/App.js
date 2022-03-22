import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Dashboard from "./pages/Dashboard/Dashboard";
import Appointment from "./pages/Home/Apppointment/Appointment";
import ContactUs from "./pages/Home/ContactUs/ContactUs";
import Doctors from "./pages/Home/Doctor/Doctors";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PrivateRoute from "./pages/Login/PrivateRoute";
import Register from './pages/Login/Register'; 
import NotFound from "./pages/Shared/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router> 
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home /> 
            </Route>

            <Route path="/doctor">
              <Doctors />
            </Route>

            <Route path="/appointment">
              <Appointment />
            </Route>
            <Route path="/contact">
              <ContactUs/>
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

{/* 
             
            
            {/* <Route path="/car/:id">
             <BuyCar></BuyCar>
            </Route> */}

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
