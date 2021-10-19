import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import AuthProvider from './context/AuthProvider';
import UserLogin from './components/userlogin/UserLogin';
import ContactUs from './components/ContactUs/ContactUs';
import Error from './components/Error/Error';
import AboutUs from './components/AboutUs/AboutUs';
import AllService from './components/AllService/AllService';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

          
            <Route path="/userlogin">
              <UserLogin></UserLogin>
            </Route>

            <PrivateRoute path ="/services">
              <AllService></AllService>
            </PrivateRoute>

            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>

            <Route path="/appointment">
              <AboutUs></AboutUs>
            </Route>

            <Route path="*">
              <Error></Error>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
