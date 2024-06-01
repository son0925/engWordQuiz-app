// 전역 Element
const loginUserName = document.querySelector('#login-username');
const loginUserPassWord = document.querySelector('#login-password');
const loginFormEl = document.querySelector('.login-form');
const registerFormEl = document.querySelector('.register-form');
const registerUserName = document.querySelector('#register-username');
const registerPassWord = document.querySelector('#register-password')
const confirmPassWord = document.querySelector('#confirm-password');






// 로그인 이벤트
loginFormEl.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const regexUserName = /^[a-zA-Z0-9]{4,10}$/;
  const regexPW = /^(?=.*[A-Z])(?=.*[a-z](?=.*\d)(?=.*[!@#$%^&?])[A-Za-z\d!@#$%^&?]{7,})/;
  const userName = loginUserName.value;
  const password = loginUserPassWord.value;
  if (regexPW.test(password) && regexUserName.test(userName)) {
    alert('로그인 성공입니다')
  }
  else {
    alert('로그인 조건에 맞지 않습니다')
  }
})

// 회원가입 이벤트
registerFormEl.addEventListener('submit', async(e) => {
  e.preventDefault();

  const regexUserName = /^[a-zA-Z0-9]{4,10}$/;
  const regexPW = /^(?=.*[A-Z])(?=.*[a-z](?=.*\d)(?=.*[!@#$%^&?])[A-Za-z\d!@#$%^&?]{7,})/;
  const username = registerUserName.value;
  const password = registerPassWord.value;
  const checkPassword = confirmPassWord.value;
  if (password !== checkPassword) {
    alert('비밀번호가 같지 않습니다')
  }
  else if (regexUserName.test(username) && regexPW.test(password)) {
    await fetch('/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username, password})
    })
    .then(res => res.json())
    .then(data => {
      alert(data.msg);
      location.href = '/';
    })
  }
  else {
    alert('회원가입 조건에 맞지 않습니다')
  }
})

// 회원가입 비밀번호 focus 이벤트
registerPassWord.addEventListener('focus', displayPasswordMemo);

function displayPasswordMemo() {
  alert('비밀번호는 최소 8자 이상이어야 하며, 대문자, 소문자, 숫자, 특수 문자를 포함해야 합니다.');

  document.getElementById('register-password').removeEventListener('focus', displayPasswordMemo);
}