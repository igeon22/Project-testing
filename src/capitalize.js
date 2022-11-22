import { toLower, toUpper } from "lodash"

function cap(string){
	let formattedString = string.split("")
	let finalString = ""
	console.log(formattedString.length + "length");

	for(let i=0;i<=formattedString.length;i++){
		// console.log(i);
		if(i==0){
			
			finalString+= toUpper(formattedString[i])
		}
		else{
			// console.log(i);
			finalString+= toLower(formattedString[i])
			
		}
	}
	return finalString
}



export{cap}