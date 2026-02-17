import { v4 as uuidv4 } from 'uuid';

function UsersList(props) {
  const users = props.users;
  console.log(users);
  return (
    
    <div className='users-list'>
      {users.map((user) => {
        <div className='user'>
          <div className='user-id'>{user.id}</div>
          <div className='user-name'>{user.name}</div>
        </div>
      })}
    </div>
  );
};
export default UsersList;