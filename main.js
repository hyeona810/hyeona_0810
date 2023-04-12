// 자바스크립트 시작하는 첫걸음은
//자바스크립트로 동작을 넣어줄 대상을
//변수로 담는것 입니다

//햄버거버튼동작을 위한 변수
let btnCall = document.querySelector(".btnCall");
//모바일 메뉴가 동작하기 위한 변수
let menuMo = document.querySelector(".menuMo");

btnCall.onclick = function (e) {
  e.preventDefault();
  btnCall.classList.toggle("on");
  menuMo.classList.toggle("on");
};
