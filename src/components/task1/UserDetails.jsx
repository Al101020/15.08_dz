function UserDetails(props) {
  const users = props.users;
//   console.log('UserDetails');
  console.log(props);

  // console.log(props.idDetails);

  return (
    <div className='users-details'></div>
//     <div className='users-list'>
//       <ShowUsers props={users} />
//     </div>
  );
};

export default UserDetails;
