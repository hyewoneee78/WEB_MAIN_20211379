const check_input_id = () => {
  const idsave_check = document.getElementById("idSaveCheck");
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
  const hasSpecialChar = /[!,@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
    passwordValue
  );
  if (!hasSpecialChar) {
    alert("패스워드는 특수문자를 1개 이상 포함해야 합니다.");
    return false;
  }
  const hasUpperCase = /[A-Z]+/.test(passwordValue);
  const hasLowerCase = /[a-z]+/.test(passwordValue);
  if (!hasUpperCase || !hasLowerCase) {
    alert("패스워드는 대소문자를 1개 이상 포함해야 합니다.");
    return false;
  }
  console.log("이메일:", emailValue);
  console.log("비밀번호:", passwordValue);
  if (idsave_check.checked == true) {
    // 아이디 체크 o
    alert("쿠키를 저장합니다.", emailValue);
    setCookie("id", emailValue, 1); // 1일 저장
    alert("쿠키 값 :" + emailValue);
  } else {
    // 아이디 체크 x
    setCookie("id", emailValue.value, 0); //날짜를 0 - 쿠키 삭제
  }
  loginForm.submit();
};

document.getElementById("login_btn").addEventListener("click", (event) => {
  if (!check_input_id()) {
    event.preventDefault();
  }
});
