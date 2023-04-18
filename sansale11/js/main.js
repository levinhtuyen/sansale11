$(document).ready(function () {
  $(".best-seller-slide").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 3,
        nav: true,
        margin: 0,
      },
      600: {
        items: 3,
        nav: false,
        margin: 0,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
        margin: 0,
      },
      1300: {
        items: 4,
        nav: true,
        loop: false,
        margin: 0,
      },
    },
  });
  $(".best-seller-slide2").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: true,
        loop: false,
        margin: 0,
      },
      1300: {
        items: 1,
        nav: true,
        loop: false,
        margin: 0,
      },
    },
  });
});

$("#step1").click(function () {
  $(".iphone-mockup img, .content-step-tab .step-1").removeClass("active");
  $(".iphone-mockup img.iphone-Go2Joy-1, .step-box1").addClass("active");
});
$("#step2").click(function () {
  $(".iphone-mockup img, .content-step-tab .step-1").removeClass("active");
  $(".iphone-mockup img.iphone-Go2Joy-2, .step-box2").addClass("active");
});
$("#step3").click(function () {
  $(".iphone-mockup img, .content-step-tab .step-1").removeClass("active");
  $(".iphone-mockup img.iphone-Go2Joy-3, .step-box3").addClass("active");
});
$("#step4").click(function () {
  $(".iphone-mockup img, .content-step-tab .step-1").removeClass("active");
  $(".iphone-mockup img.iphone-Go2Joy-4, .step-box4").addClass("active");
});
$("#step5").click(function () {
  $(".iphone-mockup img, .content-step-tab .step-1").removeClass("active");
  $(".iphone-mockup img.iphone-Go2Joy-5, .step-box5").addClass("active");
});

$("#step01").click(function () {
  $(".iphone-mockup img, .content-step-tab .step-1").removeClass("active");
  $(".iphone-mockup img.iphone-Go2Joy-1, .step-box1").addClass("active");
});
$("#step02").click(function () {
  $(".iphone-mockup img, .content-step-tab .step-1").removeClass("active");
  $(".iphone-mockup img.iphone-Go2Joy-2, .step-box2").addClass("active");
});
$("#step03").click(function () {
  $(".iphone-mockup img, .content-step-tab .step-1").removeClass("active");
  $(".iphone-mockup img.iphone-Go2Joy-3, .step-box3").addClass("active");
});
$("#step04").click(function () {
  $(".iphone-mockup img, .content-step-tab .step-1").removeClass("active");
  $(".iphone-mockup img.iphone-Go2Joy-4, .step-box4").addClass("active");
});
$("#step05").click(function () {
  $(".iphone-mockup img, .content-step-tab .step-1").removeClass("active");
  $(".iphone-mockup img.iphone-Go2Joy-5, .step-box5").addClass("active");
});

$("#step001").click(function () {
  $(".iphone-mockup img, .content-step-tab .step-1").removeClass("active");
  $(".iphone-mockup img.iphone-Go2Joy-1, .step-box1").addClass("active");
});
$("#step002").click(function () {
  $(".iphone-mockup img, .content-step-tab .step-1").removeClass("active");
  $(".iphone-mockup img.iphone-Go2Joy-2, .step-box2").addClass("active");
});
$("#step003").click(function () {
  $(".iphone-mockup img, .content-step-tab .step-1").removeClass("active");
  $(".iphone-mockup img.iphone-Go2Joy-3, .step-box3").addClass("active");
});
$("#step004").click(function () {
  $(".iphone-mockup img, .content-step-tab .step-1").removeClass("active");
  $(".iphone-mockup img.iphone-Go2Joy-4, .step-box4").addClass("active");
});
$("#step005").click(function () {
  $(".iphone-mockup img, .content-step-tab .step-1").removeClass("active");
  $(".iphone-mockup img.iphone-Go2Joy-5, .step-box5").addClass("active");
});
$("#step006").click(function () {
  $(".iphone-mockup img, .content-step-tab .step-1").removeClass("active");
  $(".iphone-mockup img.iphone-Go2Joy-6, .step-box6").addClass("active");
});
// mobile

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    hours = 11,
    yyyy = today.getFullYear(),
    // nextYear = "2022",
    // dayMonth = "06/11/",
    birthday = "06/11/" + yyyy + " " + hours + ":00";

  today =
    mm +
    "/" +
    dd +
    "/" +
    yyyy +
    " " +
    String(today.getHours()).padStart(2, "0") +
    ":" +
    String(today.getMinutes()).padStart(2, "0");
  if (today > birthday) {
    birthday = "06/30/" + yyyy + " " + 23 + ":59";
  } else {
    birthday = "06/11/" + yyyy + " " + hours + ":00";
  }
  //end

  const countDown = new Date(birthday).getTime();
  // x = setInterval(function () {
  //   const now = new Date().getTime();
  //   if (today > "06/30/" + yyyy + " " + 23 + ":59") {
  //     distance = 0;
  //   } else {
  //     distance = countDown - now;
  //   }

  //   (document.getElementById("days").innerText = Math.floor(distance / day)),
  //     (document.getElementById("hours").innerText = Math.floor(
  //       (distance % day) / hour
  //     )),
  //     (document.getElementById("minutes").innerText = Math.floor(
  //       (distance % hour) / minute
  //     )),
  //     (document.getElementById("seconds").innerText = Math.floor(
  //       (distance % minute) / second
  //     ));

  //   //do something later when date is reached
  //   if (distance < 0) {
  //     document.getElementById("headline").innerText = "It's my birthday!";
  //     document.getElementById("countdown").style.display = "none";
  //     document.getElementById("content").style.display = "block";
  //     clearInterval(x);
  //   }
  //   //seconds
  // }, 0);
})();
