var faker = require('faker');

for(var i = 0; i < 10; i++){
	var randomProductName = faker.commerce.productName();
	var randomProductPrice = faker.commerce.price(); 	
	
	console.log("***************\n\nProduct Number: "+ (i+1) +"\nrandomProductName: " + randomProductName + " 						\nrandomProductPrice: " +randomProductPrice +"€\n");
}

console.log("***************");