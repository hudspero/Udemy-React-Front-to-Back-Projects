import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

/** -- THE MAIN APP CODE -- **/

const App = () => {

   /* Display function */
   return (
      <GithubState>
         <AlertState>
            <Router>
               <div className='App'>
                  {/* Draw the Navbar, an example of defining a prop w/ title, icon in the JSX tag */}
                  <Navbar title='Github Finder' icon='fab fa-github' />
                  <Alert />
                  <div className='container'>
                     <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/user/:login' component={User} />
                        <Route component={NotFound} />
                     </Switch>
                  </div>
               </div>
            </Router>
         </AlertState>
      </GithubState>
   );
}

export default App
