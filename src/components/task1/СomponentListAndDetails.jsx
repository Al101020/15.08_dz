import './componenlistAndDetails.css';
import { useEffect, useState } from 'react';

import UsersList from './UsersList';

function СomponentListAndDetails() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      .then(response => response.json())
      .then(data => {
        setList(data);
      })
      .catch(error => console.error('Fetch error:', error));
    };
    fetchData();
  }, []);

  return (
    <>
      <div className='users'>
        <UsersList users={list} />
        <div className='users-details'></div>
      </div>
    </>
  )
}

export default СomponentListAndDetails;