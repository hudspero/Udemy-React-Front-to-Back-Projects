import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';

/** -- THE MAIN APP CODE -- **/

class App extends Component {
   /* Set basic state information: set of users retrieved from API, whether the app is loading, and if an alert has been set */
   state = {
      users: [],
      loading: false,
      alert: null
   };

   /* Asynchronously retrieve first paginated user data from Github API */
   async componentDidMount() {
      this.setState({ loading: true });
      const res = await axios.get(
         `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      this.setState({ users: res.data, loading: false });
   }

   /* Search Github users from the API, passing the searchUsers prop up from Search.js to the main App.js */
   searchUsers = async text => {
      this.setState({ loading: true });
      const res = await axios.get(
         `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      this.setState({ users: res.data.items, loading: false });
   };

   /* Clear the list of users below the search field */
   clearUsers = () => this.setState({ users: [], loading: false });

   /* When provided a message and a category, change the alert to active */
   setAlert = (msg, type) => {
      this.setState({ alert: { msg, type } });
      setTimeout(() => this.setState({ alert: null }), 3500);
   };

   /* Display function */
   render() {
      const { users, loading } = this.state;

      return (
         <Router>
            <div className='App'>
               {/* Draw the Navbar, an example of defining a prop w/ title, icon in the JSX tag */}
               <Navbar title='Github Finder' icon='fab fa-github' />
               <div className='container'>
                  <Switch>
                     <Route
                        exact
                        path='/'
                        render={props => (
                           <Fragment>
                              <Search
                                 searchUsers={this.searchUsers}
                                 clearUsers={this.clearUsers}
                                 showClear={users.length > 0 ? true : false}
                                 setAlert={this.setAlert}
                              />
                              <Users loading={loading} users={users} />
                           </Fragment>
                        )}
                     />
                     <Route exact path='/about' component={About} />
                  </Switch>
                  <Alert alert={this.state.alert} />
               </div>
            </div>
         </Router>
      );
   }
}

export default App;
