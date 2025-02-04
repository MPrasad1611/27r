function delay(){
    return new Promise((r,rj)=>{
        setTimeout(()=>{
        if(true){
            r('done');
        }
        else{
            rj('error');
        }
    },2000);
    });
}
delay().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});