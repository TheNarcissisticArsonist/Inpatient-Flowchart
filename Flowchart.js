var stage = 0;
/*
0   -> How does the patient enter the health system?
1   -> What care level is needed?
2   -> Treat, discharge, or transfer?
3.1 -> Treat hub
3.2 -> Discharged
3.3 -> Transfer hub
-1  -> Done
*/
$(document).ready(function() {
  $("#optionBox1").html("<p>ED</p>");
  $("#optionBox2").html("<p>Direct Admit</p>");
  $("#optionBox3").html("<p>Hospital Transfer</p>");
  $("#optionBox4").html("<p>PACU</p>");
});
