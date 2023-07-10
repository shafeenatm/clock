let hrs=document.getElementById("hrs")
let min=document.getElementById("min")
let sec=document.getElementById("sec")
setInterval(()=>{
    let date=new Date()
hrs.innerHTML=date.getHours();
min.innerHTML=date.getMinutes();
sec.innerHTML=date.getSeconds();
},1000)











// function clocktime(){
//     let date=new Date()
//     let hour=date.getHours()
//     let minute=date.getMinutes()
//     let second=date.getSeconds()
//     clock.innerHTML=`${hour}:${minute}:${second}`
//     setTimeout(()=>{clocktime()},1000)
// }
// clocktime()