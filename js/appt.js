$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const descInput = $("input#desc").val();
    const dateInput= $("input#date").val();
    const timeStartInput = $("input#timeStart").val();
    const timeEndInput = $("input#timeEnd").val();

    $(".name").text(nameInput);
    $(".desc").text(descInput);
    $(".date").text(dateInput);
    $(".timeStart").text(timeStartInput);
    $(".timeEnd").text(timeEndInput);

    $("#apptShow").show();
    $("#confirm").show();

  });
});