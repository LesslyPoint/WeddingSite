// Set the date we're counting down to
var countDownDate = new Date("Jul 18, 2026 14:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("CountDown").innerHTML = days + " days <br/>" + hours + " hours <br/>"
  + minutes + " minutes and <br/>" + seconds + " seconds <br/>";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("CountDown").innerHTML = "EXPIRED";
  }
}, 1000);


document.getElementById('Form').addEventListener('submit', function (e) {
      e.preventDefault();

      const form = document.getElementById('Form');
      const formData = new FormData(form);

      fetch("https://script.google.com/macros/s/AKfycbzCRVqmJn4Yw0YynTgj0ebqOeDMA6xeYs4ngPLWjjYPY8k0_Al7PATVXk__C_2bsDg5Zg/exec", {
        method: "POST",
        mode: "no-cors",  // Required for Apps Script
        body: formData
      });

      document.getElementById('output').innerHTML = "<p>Submission sent!</p>";
      form.reset();
    });

//https://script.google.com/macros/s/AKfycbzCRVqmJn4Yw0YynTgj0ebqOeDMA6xeYs4ngPLWjjYPY8k0_Al7PATVXk__C_2bsDg5Zg/exec