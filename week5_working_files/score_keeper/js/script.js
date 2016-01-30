var total = 0;

function setToZero(){
  total = 0;
  $("#result").html(total);
}

function addFive() {
total = total + 5;
$("#result").html(total);
}

function addTen(){
total = total + 10;
$("#result").html(total);
}

function subtractOne(){
total = total-1;
$("#result").html(total);
}

// $("#result").html("a new value");

$("#zero").click(setToZero); //When 0 button is clicked
$("#add5").click(addFive); //When +5 button is clicked
$("#add10").click(addTen); //When +10 button is clicked
$("#sub1").click(subtractOne); //When -1 button is clicked

console.log("Hello from your friendly javascript file");
