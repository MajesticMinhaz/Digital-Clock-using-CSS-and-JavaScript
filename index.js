function showTime() {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var session = "AM";

  if (hour == 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour = hour - 12;
    session = "PM";
  }

  hour = (hour < 10) ? "0" + hour : hour;
  minute = (minute < 10) ? "0" + minute : minute;
  second = (second < 10) ? "0" + second : second;


  var time = hour + ":" + minute + ":" + second + " " + session;
  document.getElementById("clockDisplay").innterText = time;
  document.getElementById("clockDisplay").textContent = time;
  setTimeout(showTime, 1000);
}

showTime();


// Thanks for Wathing this video ...Please Like this Video and Share
// With your Friends....

// Please Subscribe this Channel Easy Coding

// Have a Good Day........
// Bye...
