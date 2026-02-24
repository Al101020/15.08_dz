import { useEffect, useState } from 'react';

function Details(props) {
  const [detalist, setDetalist] = useState({});
  console.log(props);
  const info = props.info;
  if (info.hasOwnProperty('id')) {
    if (detalist !== info) {
      console.log(info);
      setDetalist(info);
      // console.log(detalist); // {}
    }
  } 

  useEffect(() => {
    console.log(detalist);
  }, [detalist]);
  return (
    <>
      <div className='userImgName'>
        <img src={info.avatar} className='img-fit' />
        <div>{info.name}</div>
      </div>
      <div className='userCity'>{info.details.city}</div>
      <div className='userCompany'>{info.details.company}</div>
      <div className='userPosition'>{info.details.position}</div>
    </>
  );
};

export default Details;