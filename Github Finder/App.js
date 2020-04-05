import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
   /* Set basic state information: set of users retrieved, and whether the app is loading */
   state = {
      users: [],
      loading: false
   };

   /* Retrieve user data from Github API */
   async componentDidMount() {
      this.setState({ loading: true });
      const res = await axios.get('https://api.github.com/users');
      this.setState({ users: res.data, loading: false });
   }

   /* Display function */
   render() {
      return (
         <div className='App'>
            <Navbar title='Github Finder' icon='fab fa-github' />
            {/* An example of defining a prop w/ title, icon in the JSX tag*/}
            <div className='container'>
               <Users loading={this.state.loading} users={this.state.users} />
            </div>
         </div>
      );
   }
}

export default App;
