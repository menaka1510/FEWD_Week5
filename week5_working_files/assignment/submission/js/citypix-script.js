window.onload = function () {
  console.log("Testing 1 2 3");

  $(document).ready(function(){

    $("#submit-btn").click(function(){ //Binds this function to Submit button being clicked
      event.preventDefault(); //stops page from re-freshing

      var city = $("#city-type").val(); // assigns the input value of 'city-type' text field to variable 'city'
      city = city.toLowerCase().trim(); // converts the input text to lowercase & removes the whitespaces at the beginning or end

      //Conditions for City name values, then change the class attribute of the body to the respective city
      if (city === "nyc" || city === "new york" || city === "big apple")
      { $("body").attr("class","nyc");
        $("#city-type").val(''); //resets the input field value to nil
      }


      else if (city ==="sf"|| city ==="san francisco" || city === "sanfrancisco" || city === "bay area")
      { $("body").attr("class","sf");
        $("#city-type").val(''); //resets the input field value to nil
      }

      else if (city ==="la"|| city ==="los angeles" || city === "lax" || city === "city of angels")
      { $("body").attr("class","la");
        $("#city-type").val(''); //resets the input field value to nil
      }

      else if (city ==="atx"|| city ==="austin" || city === "texas")
      { $("body").attr("class","austin");
        $("#city-type").val(''); //resets the input field value to nil
      }

      else if (city ==="syd"|| city ==="sydney" || city === "down under")
      { $("body").attr("class","sydney");
        $("#city-type").val(''); //resets the input field value to nil
      }

      else if (city ==="sg"|| city ==="singapore" || city === "singapura" || city === "garden city")
      { $("body").attr("class","singapore");
        $("#city-type").val(''); //resets the input field value to nil
      }

      else {
        $("#city-type").val("City not found, please try again");
        return false;
        }

    })

  })
}
