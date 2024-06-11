const check_xss = (input) => {
  const DOMPurify = window.DOMPurify;
  const sanitizedInput = DOMPurify.sanitize(input);
  if (sanitizedInput !== input) {
    // XSS 공격 가능성 발견 시 에러 처리
    alert("XSS 공격 가능성이 있는 입력값을 발견했습니다.");
    return false;
  }
  return sanitizedInput;
};

const check_input = () => {
  const idsave_check = document.getElementById("idSaveCheck");
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
  if (idsave_check.checked == true) {
    alert("쿠키를 저장합니다.", emailValue);
    setCookie("id", emailValue, 1);
    alert("쿠키 값 :" + emailValue);
  } else {
    setCookie("id", emailValue.value, 0);
  }
};
