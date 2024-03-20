let alien_color : string = "green" ;
if (alien_color === "green"){
    console.log("player just earned 5 point for shooting the green alien.");
}
else{
    console.log('player just earned 10 point for shooting the yellow alien.');
}

alien_color = "yellow"

    if (alien_color === "green") {
    console.log("player just earned 5 point for shooting the yellow alien.");
      } 
      else if (alien_color === "yellow") {
        console.log("player just earned 10 points for shooting the yellow alien.");
      } 
      else {
        console.log("player just earned 15 point for shooting the red alien.");
      }

      alien_color = "red";

      if (alien_color === "green") {
     console.log("player just earned 5 point for shooting green alien.");
      } 
      else if (alien_color === "yellow") {
        console.log("player just earned 10 points for shooting the yellow alien.");
      } 
      else if(alien_color === "red"){
        console.log("player just earned 15 points for shooting the red alien.");
      }
