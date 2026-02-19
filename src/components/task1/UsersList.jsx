import ShowUsers from './ShowUsers';
import { v4 as uuidv4 } from 'uuid';

function UsersList(props) {
    // console.log(props);

  return (
    <div className='users-list'>
      <ShowUsers key={uuidv4()}
        users={props.users}
        idDetails={props.idDetails}
        setIdDetails={props.setIdDetails}
        setDivUser={props.setDivUser}
        setDivDetails={props.setDivDetails}
      />
    </div>
  );
};

export default UsersList;
