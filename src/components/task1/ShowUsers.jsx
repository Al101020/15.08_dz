import { v4 as uuidv4 } from 'uuid'; // import funcUserDetails from './funcUserDetails'
import User from './User';

function showUsers(props) {
  const idDetails = props.idDetails
  const setIdDetails = props.setIdDetails;
  const funcSetDivDetails = props.setDivDetails;
  const funcSetDivUser = props.setDivUser;

  const funcUserDetails = (e) => {
    const target = e.target;
    const id = target.parentElement.children[0].textContent; // 0-получаем id
    if (id !== idDetails) {
      setIdDetails(id);
      const divUser = target.parentElement;
      funcSetDivUser(divUser);
      const divDetails = target.parentElement.parentElement.parentElement.children[1];
      funcSetDivDetails(divDetails);
    } 
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
        <User key={uuidv4()} item={item} funcUserDetails={funcUserDetails} idDetails={idDetails}
          setIdDetails={setIdDetails} />
      )}
    </>
  );
};

export default showUsers;