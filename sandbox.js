const firstNo = window.prompt("Enter first number:");
const sign = window.prompt("Enter sign +, -, /, *:");
const secondNo = window.prompt("Enter second number:");

if (sign === "+") {
    let ans = firstNo + secondNo;
     alert(ans);
}
else if (sign === "-") {
    let ans = firstNo - secondNo;
     alert(ans);
}
else if (sign === "/") {
    let ans = firstNo / secondNo;
     alert(ans);
}
else if (sign === "*") {
    let ans = firstNo * secondNo;
     alert(ans);
 }
else{
    alert("Enter a valid sign");
}
