import {cap} from "./capitalize"
import {calc} from "./calculator"
import {analyzeArray} from "./analyze"
import {caesarCipher} from "./cipher"

describe("Start test",()=>{
	test('Test if it works',()=>{
		expect(2+2).toBe(4)
	})

	test("IF capitalize function works",()=>{
		expect(cap("welcome")).toBe("Welcome")
	})

	test("My calculator",()=>{
		expect(calc.add(2,3)).toBe(5)
	})

	test("If my array analyzer works?",()=>{
		let arr1 = [1,8,3,4,2,6]
		var  ab = analyzeArray(arr1)
		expect(ab.min).toBe(1)
	})

	

})


