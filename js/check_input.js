const check_input = () => {
  const loginForm = document.getElementById("login_form");
  const loginBtn = document.getElementById("login_btn");
  const emailInput = document.getElementById("typeEmailX");
  const passwordInput = document.getElementById("typePasswordX");
  const c = "아이디, 패스워드를 체크합니다";
  alert(c);
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  document.getElementById("login_btn").addEvent;

  const sanitizedPassword = check_xss(passwordValue);
  const sanitizedEmail = check_xss(emailValue);

  if (!sanitizedEmail) {
    return false;
  }
  if (!sanitizedPassword) {
    return false;
  }
};
