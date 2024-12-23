// let isLogin = false;
// let user = "admin";
// isLogin
//   ? user == "customer"
//     ? console.log("Welocme To Customer")
//     : console.log("Welocme To Admin")
//   : console.log("please Login");
// let isVeg = false;
// let item ="gobi";
// isVeg
//   ? item == "gobi"
//     ? console.log("Gobi")
//     : console.log("Panner")
//   : item == "chicken"
//   ? console.log("Chicken")
//   : console.log("Mutton");
// let isHtml = false;
// let isCss = false;
// let isboot = false;
// let isJs = false;
// let isReact = false;
// let isNode = true;
// isHtml &&
// isCss &&
// isboot &&
// isJs == false &&
// isReact == false &&
// isNode == false
//   ? console.log("Then Become UI/UX Developer")
//   : isHtml && isCss && isboot && isJs && isReact && isNode == false
//   ? console.log("Then Become Frontend Developer")
//   : isHtml && isCss && isboot && isJs && isReact == false && isNode
//   ? console.log("Then Become Backend Developer")
//   : isHtml && isCss && isboot && isJs && isReact && isNode
//   ? console.log("Then Become FullStack Developer")
//   : console.log("GO and Join 10000Coders");
// let str="somethings"
// for(let i in str){
//   console.log("Hello",`2X${i}=${i*2}`)
// }
let students = [
  { id: 1, s_name: "Pavan", city: "Hyd" },
  { id: 2, s_name: "Arjun", city: "Sec" },
  { id: 3, s_name: "Meena", city: "Vizag" },
  { id: 4, s_name: "Rahul", city: "Bengaluru" },
  { id: 5, s_name: "Sita", city: "Chennai" },
  { id: 6, s_name: "Vijay", city: "Mumbai" }
  ];
  console.log("--------------------")
  console.log("In FOR OF LOOP")
  console.log("--------------------")
  for(let i of students){
    console.log(`${i.s_name} from ${i.city} `)
  }
  console.log("--------------------")
  console.log("In FOR IN LOOP")
  console.log("--------------------")
  for(let i in students){
    console.log(`${students[i].s_name} from ${students[i].city} `)
  }