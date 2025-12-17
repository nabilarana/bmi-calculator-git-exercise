function bmi(){
	let h=document.getElementById("h").value;
	let w=document.getElementById("w").value;
	let ans=w/(h/100*h/100);
	let bmio=(ans.toFixed(2));
	document.getElementById("result").innerHTML="Your BMI is "+bmio;
}

function calculateBMI() {
	const height = parseFloat(document.getElementById('h').value);
	const weight = parseFloat(document.getElementById('w').value);

	if (!height || !weight || height <= 0 || weight <= 0) {
		document.getElementById("result").innerHTML = "Please enter valid values!";
		return;
	}

	const bmi = weight / ((height / 100) * (height / 100));
	const bmiValue = bmi.toFixed(1);

	let category = "";

	if (bmi < 18.5) {
		category = "Underweight";
	} else if (bmi < 25) {
		category = "Normal Weight";
	} else if (bmi < 30) {
		category = "Overweight";
	} else {
		category = "Obese";
	}

	document.getElementById("result").innerHTML =
		`Your BMI is ${bmiValue}<br>Category: ${category}`;
}
