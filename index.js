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
let isHtml = false;
let isCss = false;
let isboot = false;
let isJs = false;
let isReact = false;
let isNode = true;
isHtml &&
isCss &&
isboot &&
isJs == false &&
isReact == false &&
isNode == false
  ? console.log("Then Become UI/UX Developer")
  : isHtml && isCss && isboot && isJs && isReact && isNode == false
  ? console.log("Then Become Frontend Developer")
  : isHtml && isCss && isboot && isJs && isReact == false && isNode
  ? console.log("Then Become Backend Developer")
  : isHtml && isCss && isboot && isJs && isReact && isNode
  ? console.log("Then Become FullStack Developer")
  : console.log("GO and Join 10000Coders");
