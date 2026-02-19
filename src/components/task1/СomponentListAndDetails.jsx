import './componenlistAndDetails.css';
import { useEffect, useState } from 'react';

import ShowUsers from './ShowUsers';
import UserDetails from './UserDetails';

function СomponentListAndDetails() {
  
  const [list, setList] = useState([]);
  const [idDetails, setIdDetails] = useState(0);
  // const [divDetails, setDivDetails] = useState('');

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
    <div className='task1'>
      <h1 className='titleTask'>Список с пользователей</h1>
      <div className='users'>
        <ShowUsers 
          users={list}
          idDetails={idDetails}
          setIdDetails={setIdDetails}
        />
        <UserDetails
          users={list}
          idDetails={idDetails} />
      </div>
    </div>
  )
}

export default СomponentListAndDetails;