let form = document.querySelector('form');
let name = document.getElementById('name');
let password = document.getElementById('password');
let loginBtn = document.getElementById('login-btn');

//点击输入框时改变默认样式
function focusDefult() {
  this.value = '';
  this.style.color = '#000';
}

name.onfocus = focusDefult;
password.onfocus = focusDefult;

//点击登录按钮，跳转界面
loginBtn.onclick = function() {
  let username = localStorage.getItem(name.value);
  if(username) {
    if(JSON.parse(username).password === password.value) {
      form.action = 'https://www.hackerstart.cn/#/index';
    }else {
      alert('密码错误，请重新输入');
      password.value = '';
    }
  }else {
    alert('用户不存在');
    name.value = '';
    password.value = '';
  }
}
