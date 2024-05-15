// program to find out who are eligilbe to vote
let age = 50;
switch (true) {
    case age > 0 && age <= 18:
        console.log("amchure voters");
        break;
    case age > 18 && age <= 35:
        console.log("Youth voters");
        break;
    case age > 35 && age <= 60:
        console.log("Adult voters");
        break;
    case age > 60 && age <= 130:
        console.log("senior citizens");
        break;

    default:
        console.log("Invalid");
        break;
}
// program to find out whether student passed or failed
let marks = 50;
if (marks >= 35) {
    console.log("You have Passed");
}
else {
    console.log("You have Failed");
}