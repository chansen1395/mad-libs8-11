$(document).ready(function() {

  $("#formOne").submit(function(event) {
    event.preventDefault();
    const beverage = $("#beverage").val();
    const nameInput = $("input#nameAdd").val();
    const homeAddInput = $("input#homeAdd").val();
    const cityAddInput= $("input#cityAdd").val();
    const stateAddInput = $("input#stateAdd").val();
    const zipAddInput = $("input#zipAdd").val();
    const dateAddInput = $("input#dateAdd").val();

    $(".nameAdd").text(nameInput);
    $(".homeAdd").text(homeAddInput);
    $(".cityAdd").text(cityAddInput);
    $(".stateAdd").text(stateAddInput);
    $(".zipAdd").text(zipAddInput);
    $(".dateAdd").text(dateAddInput);
    $(".outputBev").text(beverage);

    $("#letter").show();
  });
});