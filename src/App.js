import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import AuthProvider from './context/AuthProvider';
import UserLogin from './components/userlogin/UserLogin';
import Services from './components/Services/Services';
import ContactUs from './components/ContactUs/ContactUs';
import Appointment from './components/Appointment/Appointment';

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

            <Route path="/services">
              <Services></Services>
            </Route>

            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>

            <Route path="/appointment">
              <Appointment></Appointment>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
