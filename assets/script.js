$(document).ready(function () {
  var currentDate = moment().format("MMMM Do YYYY");
  var currentHour = moment().hour();
  var timeDisplay = document.getElementById("currentDay");
  timeDisplay.innerHTML = currentDate;
 

  /*
MOVING FORWARD OF THE SCHEDULER: INDICATING PAST, PRESENT, AND FUTURE HOURS ON THE SCHEDULER:
- grabbing the time block by class, function for each that sets its id to an integer so that it can be compared to the hour of the day (numeric). Conditionals to determine which css class to add or remove depending on future, present, or past of each hour. */

 // function trackForward() {
    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id"));
console.log(currentHour);
console.log("timeBlock = "+ timeBlock);
      /*- if the hour on the scheduler is less than the currentHour, it will be marked as past hour.
- If the hour on the scheduler is higher than the currentHour, it will be marked as future our
- else it is marked as the present hour */
 
      if ((timeBlock < currentHour)) {  
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (timeBlock === currentHour) {
        $(this).removeClass("future");
        $(this).addClass("present");
        $(this).removeClass("past");
      } else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
      }
    });
 // }
  /*
SET UP LOCAL STORAGE
-when text area receives text and save button is being clicked, text is saved to local storage and on the page. The var task determines the value of the text area by directing to the sibling element (class="description").
Var = time determines the respective time of the task by targeting the time block element which is a parent element to the save button and we want to get its id attributes because they tell us the time value of that slot. Then we can set these items into local storage as the variables task and time. 
*/
  $(".saveBtn").click(function (e) {
    e.preventDefault();
    var task = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, task);
    console.log(localStorage);
  });
  /*RETRIEVE TASKS AND TIME FROM LOCAL STORAGE TT DISPLAY THE VALUE ON THE PAGE: */
  $("#8 .description").val(localStorage.getItem("8"));
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
});

