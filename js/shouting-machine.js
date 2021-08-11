$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const toUpperInput = $("input#toUpper").val();

    $(".toUpper").text(toUpperInput.toUpperCase() + '!!!!!');


    $("#upper").show();
  });
});