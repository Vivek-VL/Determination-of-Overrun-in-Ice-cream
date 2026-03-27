
let startbutton = document.querySelector("#start")
let ins = document.querySelector("#text")
let stp1 = document.querySelector("#stp1")
let stp2 = document.querySelector("#stp2")
let stp3 = document.querySelector("#stp3")
let lastbg = document.querySelector("#lastbg")
let inference = document.querySelector("#inference")



let statuses = 0
let f=0



function start(){
    if(statuses==0){
        statuses=1
        startbutton.style.visibility="hidden"
        ins.innerText="Turn on the wheighing scale . Press ON button !"
        f=1
    }
    
        


}



start()

