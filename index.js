 let add=document.querySelector("#in"),
 minus=document.querySelector("#de"),
 reset=document.querySelector("#re"),
 counter=document.querySelector("#counter");

 let count=0;
 counter.innerText = count;

 const render = () => {
    counter.innerText=count;

 }

 const addIt = () => {
    count = count+1;
    render();
 }
 const resetIt = () => {
    count= 0;
    render();

 }
 const removeIt = () => {
    count = count - 1;
    render();
 }

 add.addEventListener("click",addIt);
 minus.addEventListener("click",removeIt);
 reset.addEventListener("click",resetIt);
 console.log(render)


