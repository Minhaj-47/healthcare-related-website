
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ContactUs from './components/ContactUs/ContactUs';
import FeedBack from './components/FeedBack/FeedBack';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Services from './components/Services/Services';
import TeamMembers from './components/TeamMember/TeamMembers';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
          <Router>
          <Header></Header>
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/home'>
                <Home></Home>
              </Route>
              <Route path='/login'>
                <Login></Login>
              </Route>
              <Route path='/register'>
                <Register></Register>
              </Route>
              <Route path='/feedback'>
                <FeedBack></FeedBack>
              </Route>
              <Route path='/contact'>
                <ContactUs></ContactUs>
              </Route>
              <Route path='/services'>
                <Services></Services>
              </Route>
              <Route path='/team'>
                <TeamMembers></TeamMembers>
              </Route>
              <PrivateRoute exact path='/service/:servicesId'>
                <ServiceDetails></ServiceDetails>
              </PrivateRoute>
              <Route path='/*'>
                <NotFound></NotFound>
              </Route>
              

            </Switch>
            <Footer></Footer>
          </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
