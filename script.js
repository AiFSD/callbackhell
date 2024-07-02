var count = 10;
      (function countdown() {
        if (count > 0) {
          document.getElementById("countdown").innerHTML = count;
          count--;
          setTimeout(countdown, 1000);
        } else {
          document.getElementById("countdown").innerHTML =
            "Happy Independence Day!";
          document.body.classList.add("bg");
        }
      })();
    