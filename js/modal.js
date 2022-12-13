const section = document.querySelector(".project");

const showBtn = document.querySelector(".show-modal")
const showBtn2 = document.querySelector(".show-modal2")
const showBtn3 = document.querySelector(".show-modal3")
const showBtn4 = document.querySelector(".show-modal4")

const closeBtn = document.querySelector(".close-btn");
const closeBtn2 = document.querySelector(".close-btn2");
const closeBtn3 = document.querySelector(".close-btn3");
const closeBtn4 = document.querySelector(".close-btn4");

showBtn.addEventListener("click", () => section.classList.add("active"));
showBtn2.addEventListener("click", () => section.classList.add("active2"));
showBtn3.addEventListener("click", () => section.classList.add("active3"));
showBtn4.addEventListener("click", () => section.classList.add("active4"));

closeBtn.addEventListener("click", () => section.classList.remove("active"));
closeBtn2.addEventListener("click", () => section.classList.remove("active2"));
closeBtn3.addEventListener("click", () => section.classList.remove("active3"));
closeBtn4.addEventListener("click", () => section.classList.remove("active4"));