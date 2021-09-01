// To find the maximum valu from an array

const a = [7,6,2,8,9,0];
let max = a[0];
for(let i = 1; i<a.length; i++){
if(a[i]>max){
max= a[i];
}
}
console.log("Max. value is: " + max);