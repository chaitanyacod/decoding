const num1 = parseFloat(prompt("enter the first number:"));
const num2 = parseFloat(prompt("enter the second number:"));
const num3 = parsefloat(prompt("enter the third number:"));
let largest;
if(num1 >=num2 && num1>=num3)
{
    largest=num1;
}
else if(num2 >=num1 && num2>=num3)
{
    largest=num2;
}
else
{
    largest=num3;
}
console.log("the largest number is "+largest);