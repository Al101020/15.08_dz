import ShowUsers from './ShowUsers';

function UsersList(props) {
  console.log(props);
  // const users = props.users;
  // const setIdDetails = props.setIdDetails;
  // console.log(setIdDetails);

  return (
    <div className='users-list'>
      <ShowUsers users={props.users} setIdDetails={props.setIdDetails} />
    </div>
  );
};

export default UsersList;
