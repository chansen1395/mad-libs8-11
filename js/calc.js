// Business logic:

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

// Everything below this line is user interface logic:

$(document).ready(function() {
  $("form#convertGal").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#gal").val());
    const lit = number1 * 3.785;
    $("#outputLit").text(lit);
  });

  $("form#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#outputAdd").text(result);
  });

  $("form#sub").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#sub1").val());
    const number2 = parseInt($("#sub2").val());
    const result = subtract(number1, number2);
    $("#outputSub").text(result);
  });

  $("form#mul").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#mul1").val());
    const number2 = parseInt($("#mul2").val());
    const result = multiply(number1, number2);
    $("#outputMul").text(result);
  });

  $("form#div").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#div1").val());
    const number2 = parseInt($("#div2").val());
    const result = divide(number1, number2);
    $("#outputDiv").text(result);
  });
});