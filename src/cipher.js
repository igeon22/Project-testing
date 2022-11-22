import { toLower } from "lodash";

function caesarCipher(string,shift){
	var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','']
	let formatted = string.split("")
	let shifted = " "

	for(let i =0;i<formatted.length;i++){
		let tv = identify(toLower(formatted[i]))
		// console.log(tv.position,tv.letter);
		if(tv.position+shift<= -1 ){
			tv.position = 26
			shifted += letters[tv.position+shift]
		}
		else if(tv.position+shift>25){
			tv.position = 0
			shifted += letters[0]
			// console.log('object');
		}
		else{

			shifted += letters[tv.position+shift]
		}
		// console.log(tv);
	}
	console.log(shifted);
	return shifted
	
}

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// console.log(letters.length);

function identify(string){
	var obj =  {letter:"",position:0}
	let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','']
	if(string=='á' || string=='à'){
		// obj.letter = 'a'
		obj.position = 0
	}
	else if(string=='é' || string=='è'){
		obj.letter = 'e'
		obj.position = 4
	}
	else{
		for(let i=0;i<letters.length;i++){
			if(string == letters[i]){
				// console.log("We've found it at "+ i);
				obj.letter = letters[i]
				obj.position = i
			}
		}

	}
	return obj
}

// identify('0')
let toto = caesarCipher("GLEYLY",2)
console.log(toto);

export{caesarCipher}