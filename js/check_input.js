const check_xss = (input) => {
  // DOMPurify 라이브러리 로드 (CDN 사용)
  const DOMPurify = window.DOMPurify;
  // 입력 값을 DOMPurify로 sanitize
  const sanitizedInput = DOMPurify.sanitize(input);
  // Sanitized된 값과 원본 입력 값 비교
  if (sanitizedInput !== input) {
    // XSS 공격 가능성 발견 시 에러 처리
    alert("XSS 공격 가능성이 있는 입력값을 발견했습니다.");
    return false;
  }
  // Sanitized된 값 반환
  return sanitizedInput;
};

const check_input = () => {
  const loginForm = document.getElementById("login_form");
  const loginBtn = document.getElementById("login_btn");
  const emailInput = document.getElementById("typeEmailX");
  const passwordInput = document.getElementById("typePasswordX");
  const c = "아이디, 패스워드를 체크합니다";
  alert(c);
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  if (emailValue.length < 5) {
    alert("아이디는 최소 5글자 이상 입력해야 합니다.");
    return false;
  }
  if (passwordValue.length < 12) {
    alert("비밀번호는 반드시 12글자 이상 입력해야 합니다.");
    return false;
  }
  const hasSpecialChar =
    passwordValue.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/) !== null;
  if (!hasSpecialChar) {
    alert("패스워드는 특수문자를 1개 이상 포함해야 합니다.");
    return false;
  }
  const hasUpperCase = passwordValue.match(/[A-Z]+/) !== null;
  const hasLowerCase = passwordValue.match(/[a-z]+/) !== null;
  if (!hasUpperCase || !hasLowerCase) {
    alert("패스워드는 대소문자를 1개 이상 포함해야 합니다.");
    return false;
  }
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
