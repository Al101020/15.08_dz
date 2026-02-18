import './componenlistAndDetails.css';
import { useEffect, useState } from 'react';

import UsersList from './UsersList';
import UserDetails from './UserDetails';

function СomponentListAndDetails() {
  const [list, setList] = useState([]);
  const [idDetails, setIdDetails] = useState(0);

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


  // useEffect((e) => {
  //     console.log(e.target);
  // }, [idDetails]);

  return (
    <>
      <div className='users'>
        <UsersList users={list} setIdDetails={setIdDetails} />
        <UserDetails idDetails={idDetails} />
      </div>
    </>
  )
}

export default СomponentListAndDetails;