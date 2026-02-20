import { useEffect, useState } from 'react';

function UserDetails(props) {
  const [detalist, setDetalist] = useState({});
  const info = props.info;

  if (info.hasOwnProperty('id')) {
      
      if (detalist !== info) {
        console.log(info);
        setDetalist(info);
        console.log(detalist);
      }
    } 

  return (
    <div className='users-details'></div>
  );
};

export default UserDetails;
