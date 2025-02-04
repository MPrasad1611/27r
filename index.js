// function delay(){
//     return new Promise((r,rj)=>{
//         setTimeout(()=>{
//         if(true){
//             r('done');
//         }
//         else{
//             rj('error');
//         }
//     },2000);
//     });
// }
// delay().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });
// let arr=[1,2,3,4,5];
// // [a,b,c,d,e]=arr;
// // console.log(a,b,c,d,e);
// [a,b,...c]=arr;
// console.log(c);
let obj={
    name:'sachin',id:101,age:25
}
const {name,id,...age}=obj;
console.log(name,id,age);