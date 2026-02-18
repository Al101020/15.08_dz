import { v4 as uuidv4 } from 'uuid'; // import funcUserDetails from './funcUserDetails'

function showUsers(props) {

  console.log(props);

  const funcId = props.setIdDetails;


  const funcUserDetails = (e) => { //   console.log(e.target.parentElement.parentElement.children);
    const users = Array.from(e.target.parentElement.parentElement.children);

    users.forEach((el) => {    // console.log(el);
      el.style.backgroundColor = 'white';
      el.style.color = 'black';
    });//console.log(e.target.parentElement.children[0].textContent);// 1-получаем имя, 0-получаем id

    const target = e.target;
    target.parentElement.style.backgroundColor = 'blue';
    target.parentElement.style.color = 'white';    // console.log(e.target.parentElement.children[0].textContent);// 1-получаем имя, 0-получаем id

    const id = e.target.parentElement.children[0].textContent;
    // funcId(id);
  };
  

  const users = props.users;  // console.log(users.length);

  if (users.length === 0) {  // console.log('длина массива 0');
    return (
      <>
        <div className='download'>Загрузка...</div>
      </>
    )
  }
  
  return (
    <>
      {users.map(item => 
        <div key={uuidv4()} className='user' onClick={funcUserDetails}>
          <div className='user-id displayNone'>{item.id}</div>
          <div className='user-name'>{item.name}</div>
        </div>
      )}
    </>
  );
};

export default showUsers;