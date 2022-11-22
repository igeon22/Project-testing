function reverse(string) {
  let formattedString = string.split("");
  let finalString = "";
  // console.log(formattedString.length + "length");

  for (let i = formattedString.length - 1; i >= 0; i--) {
    // console.log(i);
    // console.log(formattedString[i]);
    finalString += formattedString[i];
  }
  return finalString;
}

// let a = reverse("Welcome to the party!")
// console.log(a);

export { reverse };
