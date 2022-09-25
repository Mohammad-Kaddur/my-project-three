let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let countnerTime = setInterval(() => {
  let dateNow = Date.now();
  let date = new Date("Dec 31, 2022 23:59:59").getTime();

  let resulteDate = date - dateNow;
  //Days
  let resulteDays = Math.floor(resulteDate / (1000 * 60 * 60 * 24));
  days.innerHTML =
    resulteDays < 10
      ? `0${resulteDays}`
      : `${resulteDays}` < 100
      ? `00${resulteDays}`
      : `${resulteDays}`;
  //Hours
  let resulteHours = resulteDate % (1000 * 60 * 60 * 24);
  hours.innerHTML =
    Math.floor(resulteHours / 1000 / 60 / 60) < 10
      ? `0${Math.floor(resulteHours / 1000 / 60 / 60)}`
      : `${Math.floor(resulteHours / 1000 / 60 / 60)}`;
  //Minutes
  let resulteMinutes = resulteHours % (1000 * 60 * 60);
  minutes.innerHTML =
    Math.floor(resulteMinutes / 1000 / 60) < 10
      ? `0${Math.floor(resulteMinutes / 1000 / 60)}`
      : `${Math.floor(resulteMinutes / 1000 / 60)}`;
  //Seconds
  let resulteSecondsOne = Math.floor((resulteMinutes % (1000 * 60)) / 1000);
  seconds.innerHTML =
    resulteSecondsOne < 10 ? `0${resulteSecondsOne}` : `${resulteSecondsOne}`;
  if (resulteDate <= 0) {
    clearInterval(countnerTime);
  }
}, 1000);

//Scroll To Top

let show = document.getElementById("show");

window.onscroll = function () {
  if (window.scrollY >= 1200) {
    show.classList.add("show");
  } else {
    show.classList.remove("show");
  }
};
