let arr=["html","css","JAVASCRIPT","react","ANGULAR"];
let ar=[];
for(i=0;i<arr.length;i++){
    let str="";
    if(arr[i]==arr[i].toUpperCase())
    {
        str+=arr[i].toLowerCase();
        ar[ar.length]=`${str}`
    }
    else{
        str+=arr[i].toUpperCase();
        ar[ar.length]=`${str}`
    }
}
console.log(ar)