import './componenlistAndDetails.css';
import { useEffect, useState } from 'react';

import UsersList from './UsersList';
import UserDetails from './UserDetails';

function СomponentListAndDetails() {
  
  const [list, setList] = useState([]);
  const [idDetails, setIdDetails] = useState(0);
  
  const [divUser, setDivUser] = useState('');
  
  // const white = 'ffffff';
  // const [colorDivUser, setColorDivUser] = useState(white);

  const [divDetails, setDivDetails] = useState('');

  // const effect = () => {
  //   console.log('--- состояние idDetails ИЗМЕНИЛОСЬ - ' + idDetails);

  //   console.log(divUser);
  //   if (divUser === '') {
  //     return;
  //   }
  //   divUser.style.backgroundColor = 'blue';
  //   divUser.style.color = 'white';
  // };


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

  //   console.log('--- состояние idDetails ИЗМЕНИЛОСЬ - ' + idDetails);
      
  



    
  // const users = Array.from(e.target.parentElement.parentElement.children);
  //   // console.log(users);

  //   users.forEach((el) => {    // console.log(el);
  //     el.style.backgroundColor = 'white';
  //     el.style.color = 'black';
  //   });//console.log(e.target.parentElement.children[1].textContent);// 1-получаем имя

  //   const target = e.target;
  //   console.log(target.parentElement.parentElement.parentElement.children[1]);

  //   target.parentElement.style.backgroundColor = 'blue';
  //   target.parentElement.style.color = 'white';    // console.log(e.target.parentElement.children[0].textContent);// 1-получаем имя, 0-получаем id

  useEffect(() => {
    // console.log('--- состояние idDetails ИЗМЕНИЛОСЬ - ' + idDetails);

    console.log(divUser);
    if (divUser === '') {
      return;
    }
    // divUser.style.backgroundColor = 'blue';
    // divUser.style.color = 'white';
  }, [idDetails]);

  return (
    <>
      <div className='users'>
        <UsersList 
          users={list}
          idDetails={idDetails}
          setIdDetails={setIdDetails}
          setDivDetails={setDivDetails}
          setDivUser={setDivUser}
        />
        <UserDetails
          users={list}
          idDetails={idDetails} />
      </div>
    </>
  )
}

export default СomponentListAndDetails;