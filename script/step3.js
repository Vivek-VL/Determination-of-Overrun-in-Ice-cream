let mcyldiv = document.querySelector("#mcyldiv")
let msol = document.querySelector("#msol")
let mcyldiv1 = document.querySelector("#mcyldiv1")
let msol1 = document.querySelector("#msol1")
let diswaterdiv = document.querySelector("#diswaterdiv")
let diswatersol = document.querySelector("#diswatersol")
let funnel = document.querySelector("#funnel")
let fsol = document.querySelector("#fsol")


function funnel1(){
    if(f==16){
        f=17
        funnel.style.top="10%"
        funnel.style.rotate="0deg"
        setTimeout(function(){
            funnel.style.left="59%"
            setTimeout(function(){
                funnel.style.top="36%"
                setTimeout(function(){
                    f=18
                    ins.innerText="Click on beaker to pour melted ice-cream into the measuring cylinder."
                },1000)
            },1000)
        },1000)
    }
}


function diswater1(){
    if(f==20){
        f=21
        diswaterdiv.style.top="30%"
        setTimeout(function(){
            diswaterdiv.style.left="13.5%"
            diswaterdiv.style.rotate="20deg"
            setTimeout(function(){
                diswatersol.style.height="72%"
                fsol.style.left=""
                fsol.style.top=""
                fsol.style.height="29%"
                setTimeout(function(){
                    fsol.style.transitionDuration="1S"
                    fsol.style.height="7.4%"
                    msol1.style.height="93.3%"
                    setTimeout(function(){
                        fsol.style.transitionDuration="0.2S"
                        fsol.style.top="67.4%"
                        fsol.style.height="0%"
                        diswaterdiv.style.left="7%"
                        diswaterdiv.style.rotate=""
                        setTimeout(function(){
                            diswaterdiv.style.top=""
                            setTimeout(function(){
                                f=22
                                ins.innerText="Click on 10ml measuring cylinder to pour it into flask."
                                mcyl11()
                            },1000)
                        },1000)
                    },1000)
                },200)
            },1000)
        },1000)
    }
}


function mcyl11(){
    if(f==22){
        f=23
        mcyldiv1.style.top="10%"
        setTimeout(function(){
            mcyldiv1.style.left="75%"
            fsol.style.left="80.3%"
            fsol.style.top="12%"
            setTimeout(function(){
                mcyldiv1.style.rotate="20deg"
                fsol.style.transitionDuration="0.2s"
                setTimeout(function(){
                    fsol.style.height="81%"
                    msol1.style.transitionDuration="2s"
                    msol1.style.height="0%"
                    setTimeout(function(){
                        mcyldiv1.style.rotate=""
                        fsol.style.height="0%"
                        fsol.style.top="93%"
                        
                        setTimeout(function(){
                            mcyldiv1.style.left="25%"
                            setTimeout(function(){
                                mcyldiv1.style.top=""
                                setTimeout(function(){
                                    ins.innerText="Click on beaker to pour the mixture into measuring cylinder by funnel."
                                    f=24
                                },1000)
                            },1000)
                        },1000)
                    },2000)
                },1000)
            },1000)
        },1000)
    }
}




