import { useEffect, useState } from 'react';

// const showInfo = (info) => {
//   if (!info.id) {
//     return;
//   };
//   console.log(info);
//     let city = info.details.city;
//     divDetails.textContent = city;
// };

function UserDetails(props) {
  const info = props.info;
  const divDetails = props.divDetails;

  useEffect(() => {
    if (!info.id) {
      return;
    };
    console.log(info);
    const city = info.details.city;
    const name = info.name;
    const company = info.details.company;
    const position = info.details.position;
    // divDetails.textContent = city;
    divDetails.innerHTML = `
      <h4 class='infoName'>${name}</h4>
      <div class='infoCity'>City: ${city}</div>
      <div class='infoCompany'>${company}</div>
      <div class='infoPosition'>${position}</div>
      `
  } , [info])

  return (
    <div className='user-details'>      {/* <Details info={info} /> */}
      {/* <div className='userImgName'>
        <img src={info.avatar} className='img-fit' />
        <div>{info.name}</div>
      </div> */}
      {/* <div className='userCity'>{infoCity}</div> */}
      {/* <div className='userCompany'>{info.details.company}</div>
      <div className='userPosition'>{info.details.position}</div> */}
    </div>
  );
};

export default UserDetails;
