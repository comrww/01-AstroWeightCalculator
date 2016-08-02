function calculateWeightOnOtherWorld() {
	var userWeight = document.getElementById("userWeight").value;
	var multipleOfEarthsWeight = document.getElementById("planet").value;
	var userWeightOnSelectedWorld = userWeight * multipleOfEarthsWeight;
	document.getElementById("answerArea").innerHTML = userWeightOnSelectedWorld;
}

//Create a function that will be called when a user clicks the button
//This function should grab the values entered by the user
//from the input element and the select element
//The function should then calculate the weight of the user
//on the selected planet and show the weight to the user in the p element
