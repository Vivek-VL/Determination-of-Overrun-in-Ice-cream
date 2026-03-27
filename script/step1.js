let on = document.querySelector("#on")
let tare = document.querySelector("#tare")
let reading = document.querySelector("#reading")
let spatula = document.querySelector("#spatula")
let machine = document.querySelector("#machine")









function on1(){
    if(f==1){
        f=2
        reading.style.opacity="100%"
        ins.innerText="Click on first left volumetric flask and place it on wheighing scale."
    }

}


function tare1(){
    if(f==4){
        f=5
        reading.innerText="00.00"
        ins.innerText="Click on 'Protien' container's cap."
    }
    else if(f==34){
        f=35
        reading.innerText="00.00"
        ins.innerText="Click on empty petridish to measure its weight."
    }
}