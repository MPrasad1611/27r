// for(let i=1;i<=50;i++){
//     console.log(`5 X ${i} = ${5*i} `)
// }
// let str="Welcome"
// let s="";
// for(i=str.length-1;i>=0;i--){
//     s+=str[i]

// };
// console.log(s);
// let str="Welcome"
// let s="";
// for(let i=0;i<5;i++)
// {
//     s+="*";
//     console.log(s);
// }
// let a=["krishna","sai","prasad","vishnu"];
// // for(i=0;i<a.length;i=i+2){
// //     console.log(a[i])
// // }
// for(i=0;i<a.length;i++){
//     console.log(`a[i][0])
// }
// let st="anna"
// let s=""
// for(i=st.length-1;i>=0;i--){
// s+=st[i];
// }
// st==s?console.log("It is Palindrome"):console.log("It is not Palindrome")

// if(st==s)
//      console.log("It is Palindrome")
// else
//     console.log("It is not Palindrome")

// let a=["one","two","six","one"];
// for(i=0;i<a.length;i++){
//         console.log(a[i][1])
//  }
let a=1;
while(a<=5){
   console.log(`In while Loop ${a}`)
   a++;
};
console.log("-----------------")
let b=1;
do{
    console.log(`In Do while Loop ${b}`)
    b++;
}while(b<=5)
console.log("-----------------")
console.log(`USING BREAK STATEMENT`)
c=0;
while(c<=5){
    if(c==3)
        break;
  console.log(c);
  c++; 
}
console.log("-----------------")
console.log(`USING CONTINUE STATEMENT`)
d=0;
while(d<=10){
    if(d==3){
         d++; 
        continue;
    }
  console.log(d);
  d++; 
}
console.log("-----------------")
console.log("Esle-If Ladder")
m=76;
if(m>=90)
    console.log("A Grade")
else if(m>=80&&m<90)
    console.log("B Grade")
else if(m>=70&&m<80)
    console.log("C Grade")
else
    console.log("F Grade")

console.log("-----------------")
console.log("Adult or Minor Checking")
let age = 20;
if(age >= 18)
   console.log("Adult");
else
   console.log("Minor")
