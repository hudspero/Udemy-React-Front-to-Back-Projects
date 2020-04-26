import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

/* Component for handling Search functionality */
const Search = () => {
   const githubContext = useContext(GithubContext);
   const alertContext = useContext(AlertContext);

   const [text, setText] = useState('');

   /* When clicking the Search button */
   const onSubmit = e => {
      e.preventDefault();
      if (text === '') {
         //If empty
         alertContext.setAlert('Search field cannot be empty', 'light');
      } else {
         githubContext.searchUsers(text);
         setText('');
      }
   };

   /* Set the text entered in the search field as the value to search with */
   const onChange = e => setText(e.target.value);

   return (
      <div>
         <form onSubmit={onSubmit} className='form'>
            <input
               type='text'
               name='text'
               placeholder='Search Users '
               value={text}
               onChange={onChange}
            />
            <input
               type='submit'
               value='Search'
               className='btn btn-dark btn-block'
            />
         </form>
         {githubContext.users.length > 0 && (
            <button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>
               Clear
            </button>
         )}
      </div>
   );
}

export default Search;
