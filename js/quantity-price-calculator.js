function QuantityCalc1() {
	let Product1Value = document.querySelector("#quantity-input-1").value * 9.99;
	
	document.querySelector("#update-cart-1").innerHTML = `€${Product1Value.toFixed(2)}`;
	window.onload = `€${Product1Value.toFixed(2)}`;
}

function QuantityCalc2() {
	let Product2Value = document.querySelector("#quantity-input-2").value * 9.99;
	
	document.querySelector("#update-cart-2").innerHTML = `€${Product2Value.toFixed(2)}`;
	window.onload = `€${Product2Value.toFixed(2)}`;
}

function QuantityCalc3() {
	let Product3Value = document.querySelector("#quantity-input-3").value * 8.99;
	
	document.querySelector("#update-cart-3").innerHTML = `€${Product3Value.toFixed(2)}`;
	window.onload = `€${Product3Value.toFixed(2)}`;
}

function CartValueCalc() {
	let Product1Value = document.querySelector("#quantity-input-1").value * 9.99;
	let Product2Value = document.querySelector("#quantity-input-2").value * 9.99;
	let Product3Value = document.querySelector("#quantity-input-3").value * 8.99;
	let CartValue = Product1Value + Product2Value + Product3Value;
	
	document.querySelector("#cart-value").innerHTML = `€${CartValue.toFixed(2)}`;
	window.onload = `€${CartValue.toFixed(2)}`;
}

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
	window.onload = `€${ShippingFee.toFixed(2)}`;
	
	let Product1Value = document.querySelector("#quantity-input-1").value * 9.99;
	
	document.querySelector("#update-cart-1").innerHTML = `€${Product1Value.toFixed(2)}`;
	window.onload = `€${Product1Value.toFixed(2)}`;	
	
	let Product2Value = document.querySelector("#quantity-input-2").value * 9.99;

	document.querySelector("#update-cart-2").innerHTML = `€${Product2Value.toFixed(2)}`;
	window.onload = `€${Product2Value.toFixed(2)}`;

	let Product3Value = document.querySelector("#quantity-input-3").value * 8.99;
	let CartValue = Product1Value + Product2Value + Product3Value;
	
	document.querySelector("#update-cart-3").innerHTML = `€${Product3Value.toFixed(2)}`;
	window.onload = `€${Product3Value.toFixed(2)}`;
	
	let TaxTotal = CartValue * 0.09;
	document.querySelector("#tax-total").innerHTML = `€${TaxTotal.toFixed(2)}`;
	window.onload = `€${TaxTotal.toFixed(2)}`;
	
	let SubTotalValue = CartValue + ShippingFee + TaxTotal;
	
	document.querySelector("#subtotal-value").innerHTML = `€${SubTotalValue.toFixed(2)}`;
	window.onload = `€${SubTotalValue.toFixed(2)}`;	
}