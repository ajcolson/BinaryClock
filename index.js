function int2binpad(num){
    var returnVal = num.toString(2)
    if (returnVal.length < 6 ){
        while (returnVal.length < 6){
            returnVal = "0" + returnVal
        }
    } else {
        returnVal = returnVal.substring(returnVal.length - 6)
    }
    return returnVal
}

function recenterClock(){
    var clockElem = document.querySelector("#main");
    var CLOCK_WIDTH = clockElem.clientWidth
    var CLOCK_HEIGHT = clockElem.clientHeight

    var CLOCK_POS_X = 0
    var CLOCK_POS_Y = 0

    if (window.innerWidth > CLOCK_WIDTH){
        CLOCK_POS_X = Math.floor((window.innerWidth - CLOCK_WIDTH)/2) + 5
    }

    if (window.innerHeight > CLOCK_HEIGHT){
        CLOCK_POS_Y = Math.floor((window.innerHeight - CLOCK_HEIGHT)/2) + 5
    }

    clockElem.style.top = CLOCK_POS_Y + "px"
    clockElem.style.left = CLOCK_POS_X + "px"
}


document.addEventListener("DOMContentLoaded",()=>{
    recenterClock()
    window.addEventListener("resize",function(){
        recenterClock()
    })
    setInterval(()=>{
        const curTime = new Date()
        var hour = curTime.getHours(),
            min = curTime.getMinutes(),
            sec = curTime.getSeconds(),
            bHour = int2binpad(hour),
            bMin = int2binpad(min),
            bSec = int2binpad(sec);
        
        document.querySelector("#human-time").innerHTML = `${hour}:${min}:${sec}`

        for (var i = 0; i < 6; i++){
            var h = bHour.charAt(i)
            if (h == "1")
                document.querySelector(`#cell-hour-${6-i}`).classList.add("lit")
            else document.querySelector(`#cell-hour-${6-i}`).classList.remove("lit")
            
            var m = bMin.charAt(i)
            if (m == "1")
                document.querySelector(`#cell-minute-${6-i}`).classList.add("lit")
            else document.querySelector(`#cell-minute-${6-i}`).classList.remove("lit")
    
            var s = bSec.charAt(i)
            if (s == "1")
                document.querySelector(`#cell-second-${6-i}`).classList.add("lit")
            else document.querySelector(`#cell-second-${6-i}`).classList.remove("lit")
        }
    },500)
})
