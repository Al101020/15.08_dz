import { v4 as uuidv4 } from 'uuid';
import User from './User';

function showUsers(props) {
  const idDetails = props.idDetails
  const setIdDetails = props.setIdDetails;

  const funcUserDetails = (e) => {
    const target = e.target;
    const id = target.parentElement.children[0].textContent;
    if (id !== idDetails) {
      setIdDetails(id);
    } 
  };
  
  const users = props.users;

  if (users.length === 0) {
    return (
      <>
        <div className='download'>Загрузка...</div>
      </>
    )
  }
  
  return (
    <div className='users-list'>
      {users.map(item =>
        <User key={uuidv4()} item={item} funcUserDetails={funcUserDetails} idDetails={idDetails}
          setIdDetails={setIdDetails} />
      )}
    </div>
  );
};

export default showUsers;