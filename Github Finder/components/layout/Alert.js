import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

/* Component for handling Alert message when search field is empty */
export const Alert = () => {
   const alertContext = useContext(AlertContext);

   const { alert } = alertContext;

   return (
      alert !== null && (
         <div className={`alert alert-${alert.type}`}>
            <i className='fas fa-info-circle'></i> {alert.msg}
         </div>
      )
   );
};

export default Alert;
