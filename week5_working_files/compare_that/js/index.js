function compareNumbers(){
//Get the values of input A and B
  var a = $("#a").val();
  var b = $("#b").val();


if(a && b){
  var comparison = $("#comparison");

a = Number(a); // To convert the string into a numeric value which is also not a decimal
b = Number(b);


    //if A is greater than B
    if (a > b) {
     comparison.html('>');
    }

    //if A is less than B
    else if (a < b) {
    comparison.html('<');
    }

    //if A is equal to B
    else if (a === b) {
    comparison.html('===');
    }

    else {
    comparison.html('NaN');
    }
  }
}

// Bind the submit button to our function
$("#submit").click(compareNumbers);
