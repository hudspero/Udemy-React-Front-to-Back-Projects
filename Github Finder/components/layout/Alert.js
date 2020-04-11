import React from 'react';

/* Component for handling Alert message when search field is empty */
export const Alert = ({ alert }) => {
   return (
      alert !== null && (
         <div className={`alert alert-${alert.type}`}>
            <i className='fas fa-info-circle'></i> {alert.msg}
         </div>
      )
   );
};

export default Alert;
