function calc() {
	var Region = document.querySelector("#country-selector").value;
	var ShippingFee;
	
	if (Region == "IE") {
		ShippingFee = 3.80
	} else if (Region == "UK") {
		ShippingFee = 5.50
	} else if (Region == "EU") {
		ShippingFee = 6.00
	} else if (Region == "ROW") {
		ShippingFee = 7.00
	} else if (Region == "default") {
		ShippingFee = 0.00
	}
	
	document.querySelector("#shipping-fee-result").innerHTML = `€${ShippingFee.toFixed(2)}`;
}