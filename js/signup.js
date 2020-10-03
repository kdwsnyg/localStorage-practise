let form = document.querySelector('form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let repeatPwd = document.getElementById('repeat-pwd');
let registorBtn = document.getElementById('registor-btn');

//点击输入框时改变默认样式
function focusDefult() {
  this.value = '';
  this.style.color = '#000';
}

name.onfocus = focusDefult;
email.onfocus = focusDefult;
password.onfocus = focusDefult;
repeatPwd.onfocus = focusDefult;

//点击注册按钮，提交用户信息并跳转页面
registorBtn.onclick = function() {
  if(localStorage.getItem(name.value)) {
    alert('此用户名已存在');
    name.value = '';
  }else if(repeatPwd.value !== password.value) {
    alert('密码输入不一致，请重新输入');
    repeatPwd.value = '';
  }else {
    let userdata = {
      "email": email.value,
      "password": password.value
    }
    localStorage.setItem(name.value, JSON.stringify(userdata));
    form.action = 'pages/signin.html';
  }
}