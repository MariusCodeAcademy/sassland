//JQuery Module Pattern

// An object literal
var app = {
  init: function() {
    app.functionOne();
  },
  functionOne: function () {
  }
};
$("document").ready(function () {
  app.init();
});

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  // vars
  const nav = document.querySelector('#navigation');
  const searchBtn = document.querySelector('#searchBtn');
  const navTop = nav.offsetTop;

  
  // sticky nav Start ===================================================================
  function stickyNavigation() { 
    // console.log('navTop = ' + navTop);
    // console.log('scrollY = ' + window.scrollY);
  }
  
  window.addEventListener('scroll', stickyNavigation);

  function stickyNavigation() {
    if (window.scrollY >= navTop + 50) {
      //sticky ON
      document.body.classList.add('fixed-nav');
      // navbar
      nav.classList.remove('bg-transparent');
      nav.classList.remove('navbar-dark');
      nav.classList.add('bg-light');
      nav.classList.add('navbar-light');
      // search btn
      searchBtn.classList.remove('btn-outline-light');
      searchBtn.classList.add('btn-outline-dark');

    } else {
      // sticky OFF
      document.body.classList.remove('fixed-nav');
      //navbar
      nav.classList.add('bg-transparent');
      nav.classList.add('navbar-dark');
      nav.classList.remove('bg-light');
      nav.classList.remove('navbar-light');
      //search btn
      searchBtn.classList.add('btn-outline-light');
      searchBtn.classList.remove('btn-outline-dark');
    }
  }

  // sticky nav END ===================================================================
  // sticky nav END ===================================================================

  // Date Start ===================================================================
    const year = 2020;
    const month = 4;
    const day = 8;
    const hour = 13;
    const minutes = 45;

    var dateNow = new Date();
    var dateEvent = new Date(year, month, day, hour, minutes)

    var dateDifference = dateEvent - dateNow;

    dateDifference = new Date(dateDifference);

    var leftYear = dateDifference.getFullYear();
    var leftMonth = dateDifference.getMonth();
    var leftDay = dateDifference.getDate();
    var leftHour = dateDifference.getHours(); 
    var leftMinutes = dateDifference.getMinutes(); 
    var leftSeconds = dateDifference.getSeconds(); 

    console.log(leftMonth,leftDay,leftHour,leftMinutes )


    // convert to a function and update
    document.querySelector(".countdown__circle.days .countdown__circle__value").innerHTML = leftMonth * 30 + leftDay;
    document.querySelector(".countdown__circle.hours .countdown__circle__value").innerHTML = leftHour;
    document.querySelector(".countdown__circle.minutes .countdown__circle__value").innerHTML = leftMinutes;
    document.querySelector(".countdown__circle.seconds .countdown__circle__value").innerHTML = leftSeconds;





  
});//dom content

