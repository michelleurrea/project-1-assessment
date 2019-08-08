console.log("Hey, I'm working");

// Global variables

var count = "0";

// If the "+" button is clicked...
document.getElementById("plus").addEventListener("click", function(){
	var input = document.getElementById("user-input").value;
	// Add the input to the count
	var result = (parseInt(count) + parseInt(input));
	count = result;
	// Display the new count
	document.getElementById("total-count").innerText = count;
	// Update the count by returning it
	return count;
});

// If the "-" button is clicked
document.getElementById("minus").addEventListener("click", function(){
	var input = document.getElementById("user-input").value;
	// Subtract the input from the count
	var result = (parseInt(count) - parseInt(input));
	count = result;
	// Display the new count
	document.getElementById("total-count").innerText = count;
	// Update the count by returning it
	return count;
});