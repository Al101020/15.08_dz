const funcUserDetails = (e) => { //   console.log(e.target.parentElement.parentElement.children);
  const users = Array.from(e.target.parentElement.parentElement.children);

  users.forEach((el) => {    // console.log(el);
    el.style.backgroundColor = 'white';
    el.style.color = 'black';
  });//console.log(e.target.parentElement.children[0].textContent);// 1-получаем имя, 0-получаем id

  const target = e.target;
  target.parentElement.style.backgroundColor = 'blue';
  target.parentElement.style.color = 'white';

  console.log(e.target.parentElement.children[0].textContent);
};

export default funcUserDetails;