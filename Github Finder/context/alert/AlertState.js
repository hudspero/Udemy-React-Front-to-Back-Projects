import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
   const InitialState = null;

   const [state, dispatch] = useReducer(AlertReducer, InitialState);

   /* When provided a message and a category, change the alert to active */
   const setAlert = (msg, type) => {
      dispatch({ type: SET_ALERT, payload: { msg, type } })
      setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3500)
   }

   return <AlertContext.Provider
      value={{
         alert: state,
         setAlert
      }}
   >
      {props.children}
   </AlertContext.Provider>
}

export default AlertState;