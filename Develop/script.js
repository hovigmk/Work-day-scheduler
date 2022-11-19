// Get today's date to display in the header
var today = dayjs();
$("#currentDay").text(today.format("MMM D, YYYY"));

// wrapping the code in a ready function as per the criteria
$(document).ready(function () {
  function timecolour() {
    //get the current hour.
    var currenthour = dayjs().hour();

    // loop over time blocks
    $(".time-block").each(function () {
      var timeblock = parseInt($(this).attr("id").split("-")[1]);

      // To check the time and add the classes for background colours
      if (timeblock < currenthour) {
        $(".description").removeClass("future");
        $(".description").removeClass("present");
        $(".description").addClass("past");
      } else if (timeblock === currenthour) {
        $(".description").removeClass("past");
        $(".description").removeClass("future");
        $(".description").addClass("present");
      } else {
        $(".description").removeClass("present");
        $(".description").removeClass("past");
        $(".description").addClass("future");
      }
    });
  }
  // calling the function to implement
  timecolour();

  //looping through the classes of save buttons and adding event listeners
  var savebtns = $(".saveBtn");

  for (var btn of savebtns) {
    $(btn).click(function (event) {
      var text = $(this).siblings("textarea").val();
      var hour = $(this).parent().attr("id");
      console.log(hour, text);

      localStorage.setItem(hour, text);
    });
  }
  // retrieve data from the local storage for each time block
  $("#hour-9 .description").val(localStorage.getItem("hour9"));
  $("#hour-10 .description").val(localStorage.getItem("hour10"));
  $("#hour-11 .description").val(localStorage.getItem("hour11"));
  $("#hour-12 .description").val(localStorage.getItem("hour12"));
  $("#hour-13 .description").val(localStorage.getItem("hour13"));
  $("#hour-14 .description").val(localStorage.getItem("hour14"));
  $("#hour-15 .description").val(localStorage.getItem("hour15"));
  $("#hour-16 .description").val(localStorage.getItem("hour16"));
  $("#hour-17 .description").val(localStorage.getItem("hour17"));
});
