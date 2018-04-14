let questions = ["Black Panther", "Home Alone", "Home Alone 2", "Terminator", "The Breadwinner", "Street Fighter Movie"];

for (let i = 0; i < questions.length; i++){
let response = prompt(questions[i]);
if (response === "yes" || response === "Yes"){
  console.log("[X]" + questions[i]);
}else if (response === "No" || response === "no"){
  console.log("[ ]" + questions[i]);
};
}
