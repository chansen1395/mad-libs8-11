$(document).ready(function () {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#nameAdd").val();
    const addressInput = $("input#addressAdd").val();
    const phoneInput = $("input#phoneAdd").val();

    $("ul#name").prepend("<ul>" + nameInput + "</ul>");
    $("li#address").prepend("<li>" + addressInput + "</li>");
    $("li#phone").prepend("<li>" + phoneInput + "</li>");
  });

  $("ul#name").first().click(function () {
    $("li").toggle();
  });

});