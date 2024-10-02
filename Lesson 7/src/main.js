(function () {
  // const openForm = document.querySelectorAll('.aut__form');
  let logIn = document.querySelectorAll('.login__form');
  let crAcc = document.querySelectorAll('.create__accaunt');
  console.log(logIn);
  document.querySelectorAll('.aut__form').addEventListener('click', () => {
    logIn.classList.add("open");
    console.log(logIn.classList);
  });
  console.log(logIn.classList);
}());