$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const beverage = $("#beverage").val();
    $("#outputBev").text(beverage);
    // $("#apptShow").show();
    // $("#confirm").show();
  });

  $("#formTwo").submit(function(event) {
    event.preventDefault();
    const flavor = $("input:radio[name=flavor]:checked").val();
    $("#outputFlav").text(flavor);
  });

  $("#formThree").submit(function(event) {
    event.preventDefault();
    const dob = $("#born").val();
    $("#outputDOB").text(dob);
  });

  $("#formFour").submit(function(event) {
    event.preventDefault();
    const favoriteColor = $("#color").val();
    $("#outputColor").text(favoriteColor);
  });
});