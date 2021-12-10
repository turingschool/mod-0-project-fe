// Add your annotations, line by line, to the code below using code comments.
// To ensure that the code does what you think it does, run it in the Dev Tools!

var username = "@letacodes";
var tweet = "This is rad!";
var timeStamp = "10:46pm";
var numberOfFollowers = 891;

var output = `At ${timeStamp}, ${username} tweeted: "${tweet}"`;
var followerCheck = `User ${username} has ${numberOfFollowers} followers.`;
console.log(output);
console.log(followerCheck);

username = "@ameseee";
numberOfFollowers = 672;

var followerCheck = `User ${username} has ${numberOfFollowers} followers.`;
console.log(followerCheck);

// -------------------------------

var specialNum = 20;
// Explain what would happen if specialNum is assigned to 12, 45, and 98

if (specialNum % 15 === 0) {
  console.log("fizzbuzz");
} else if (specialNum % 5 === 0) {
  console.log("fizz");
} else if (specialNum % 3 === 0) {
  console.log("buzz");
} else {
  console.log(specialNum);
}

// -------------------------------

var classSizes = [34, 29, 27, 45];
var classNames = ["Mod 1", "Mod 2", "Mod 3", "Combined Mod 4"];

for (var i = 0; i < classSizes.length; i++) {
  console.log(`There are currently ${classSizes[i]} students in the ${classNames[i]} class!`)
}
