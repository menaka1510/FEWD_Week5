console.log("working");

var state = "on";

function lightSwitch() {
  //turn off the light
  if (state === "on") {
    $("body").addClass("dark");
    state = "off";
  }
  //turn on the light
  else if (state === "off") {
    $("body").removeClass("dark");
    state = "on";
  }
}

$("#light_switch").click(lightSwitch);
