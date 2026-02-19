import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

function User(props) {
    //   console.log(props);
  const item = props.item;
  const idDetails = props.idDetails;
  const setIdDetails = props.setIdDetails;

  const white = 'ffffff';
  const [colorDivUser, setColorDivUser] = useState(white);

    
  if (item.id == idDetails) {
    console.log('ggg');
    console.log(item.id);
    console.log(idDetails);
    // const color = '#888ef5';
    // setColorDivUser(color);
  }
  const changeColor = (e) => {
    // const color = '#888ef5';
    // setColorDivUser(color);
    setIdDetails(e.target.parentElement.children[0].textContent);
    // console.log(e.target.parentElement.children[0].textContent);
    
    
  };

  
//   const funcUserDetails = props.funcUserDetails;//  onClick={funcUserDetails}
  //
  return (
    <>
      <div key={uuidv4()} className='user'
      style={{background: colorDivUser}} onClick={changeColor}>
        <div className='user-id displayNone'>{item.id}</div>
        <div className='user-name'>{item.name}</div>
      </div>
    </>
  );
};

export default User;