var objA = true
var objB = true
var objC = true
var objD = true
var objE = true
var objF = true
var objG = true
var objH = true
var objI = true

function showThisA(obj){
    if(!objA) {
        let m = document.getElementsByClassName(obj)
        for(i=0;i<m.length;i++){
            if(m[i].tagName !== "svg") {
                m[i].classList.add("is-show")
            }
        }
        objA = true
    } else {
        let m = document.getElementsByClassName(obj)
        for(i=0;i<m.length;i++){
            if(m[i].tagName !== "svg") {
                m[i].classList.remove("is-show")
            }
        }
        objA = false
    }
}
function showThisB(obj){
    if(!objB) {
        let m = document.getElementsByClassName(obj)
        for(i=0;i<m.length;i++){
            if(m[i].tagName !== "svg") {
                m[i].classList.add("is-show")
            }
        }
        objB = true
    } else {
        let m = document.getElementsByClassName(obj)
        for(i=0;i<m.length;i++){
            if(m[i].tagName !== "svg") {
                m[i].classList.remove("is-show")
            }
        }
        objB = false
    }
}
function showThisC(obj){
    if(!objC) {
        let m = document.getElementsByClassName(obj)
        for(i=0;i<m.length;i++){
            if(m[i].tagName !== "svg") {
                m[i].classList.add("is-show")
            }
        }
        objC = true
    } else {
        let m = document.getElementsByClassName(obj)
        if(objF) {
            for(i=0;i<m.length;i++){
                if(m[i].tagName != "svg" && !m[i].outerHTML.includes('parameter')) {
                    m[i].classList.remove("is-show")
                }
            }
        } else if(!objF) {
            console.log("objF is false")
            for(i=0;i<m.length;i++){
                if(m[i].tagName !== "svg") {
                    m[i].classList.remove("is-show")
                }
            }
        }
        objC = false
    }
}
function showThisD(obj){
    if(!objD) {
        let m = document.getElementsByClassName(obj)
        for(i=0;i<m.length;i++){
            if(m[i].tagName !== "svg") {
                m[i].classList.add("is-show")
            }
        }
        objD = true
    } else {
        let m = document.getElementsByClassName(obj)
        if(objF) {
            for(i=0;i<m.length;i++){
                if(m[i].tagName != "svg" && !m[i].outerHTML.includes('parameter')) {
                    m[i].classList.remove("is-show")
                }
            }
        } else if(!objF) {
            console.log("objF is false")
            for(i=0;i<m.length;i++){
                if(m[i].tagName !== "svg") {
                    m[i].classList.remove("is-show")
                }
            }
        }
        objD = false
    }
}
function showThisE(obj){
    if(!objE) {
        let m = document.getElementsByClassName(obj)
        for(i=0;i<m.length;i++){
            if(m[i].tagName !== "svg") {
                m[i].classList.add("is-show")
            }
        }
        objE = true
    } else {
        let m = document.getElementsByClassName(obj)
        for(i=0;i<m.length;i++){
            if(m[i].tagName !== "svg") {
                m[i].classList.remove("is-show")
            }
        }
        objE = false
    }
}
function showThisF(obj){
    if(!objF) {
        let m = document.getElementsByClassName(obj)
        for(i=0;i<m.length;i++){
            if(m[i].tagName !== "svg") {
                m[i].classList.add("is-show")
            }
        }
        objF = true
    } else {
        let m = document.getElementsByClassName(obj)
        for(i=0;i<m.length;i++){
            if(m[i].tagName !== "svg") {
                m[i].classList.remove("is-show")
            }
        }
        objF = false
    }
}

function showThisG(obj){
    if(!objG) {
        let m = document.getElementsByClassName(obj)
        for(i=0;i<m.length;i++){
            if(m[i].tagName !== "svg") {
                m[i].classList.add("is-show")
            }
        }
        objG = true
    } else {
        let m = document.getElementsByClassName(obj)
        for(i=0;i<m.length;i++){
            if(m[i].tagName !== "svg") {
                m[i].classList.remove("is-show")
            }
        }
        objG = false
    }
}

function showThisH(obj){
    if(!objH) {
        let m = document.getElementsByClassName(obj)
        for(i=0;i<m.length;i++){
            if(m[i].tagName !== "svg") {
                m[i].classList.add("is-show")
            }
        }
        objH = true
    } else {
        let m = document.getElementsByClassName(obj)
        for(i=0;i<m.length;i++){
            if(m[i].tagName !== "svg") {
                m[i].classList.remove("is-show")
            }
        }
        objH = false
    }
}

function showThisI(obj){
    if(!objI) {
        let m = document.getElementsByClassName(obj)
        for(i=0;i<m.length;i++){
            if(m[i].tagName !== "svg") {
                m[i].classList.add("is-show")
            }
        }
        objI = true
    } else {
        let m = document.getElementsByClassName(obj)
        for(i=0;i<m.length;i++){
            if(m[i].tagName !== "svg") {
                m[i].classList.remove("is-show")
            }
        }
        objI = false
    }
}

var zoom = false
function zoomThis(n,x,y,z) {
    let result = document.getElementById('mobile-zoom')
    let dot = document.getElementsByClassName('mobile-dot')
    if(!zoom) {
        // document.getElementById('mobile-zoom').scrollIntoView({
        //     behavior: "smooth"
        // })
        for(let i=0;i<dot.length;i++) {
            if(!dot[i].outerHTML.includes(n)){
                dot[i].style.display = 'none';
            }
        }
        result.style.backgroundPosition = "-" + x + "px -" + y+ "px";
        result.style.backgroundSize =  z + "px"
        mobileShow(n)
        zoom = true
    } else {
        for(let i=0;i<dot.length;i++) {
            if(!dot[i].outerHTML.includes(n)){
                dot[i].style.display = 'block';
            }
        }
        result.style.backgroundSize =  "100%"
        result.style.backgroundPosition = "0 0";
        mobileShow(n)
        zoom = false
    }
}

function mobileShow(obj) {
    let m = document.getElementsByClassName('mobile-des')
    let n = document.getElementsByClassName(obj)
    if(!zoom) {
        m[0].classList.add('mobile-is-show')
        switch (obj) {
            case 'user-setting':
                m[0].getElementsByTagName('P')[0].innerHTML = 'Preset'
                m[0].getElementsByTagName('P')[1].innerHTML = 'Click "plus" button to create your own preset or choose default setting to have a quick demonstration'
                break
            case 'set-parameter':
                m[0].getElementsByTagName('P')[0].innerHTML = 'Group Setting'
                m[0].getElementsByTagName('P')[1].innerHTML = 'Adjust midi cc parameter in detail'
                break
            case 'edit-function':
                m[0].getElementsByTagName('P')[0].innerHTML = 'Tool Bar'
                m[0].getElementsByTagName('P')[1].innerHTML = 'Click "plus" button and frame the area you want to define, or choose others tool to edit your custom fingerboard'
                break
            case 'show-playtime':
                m[0].getElementsByTagName('P')[0].innerHTML = 'Note Display'
                m[0].getElementsByTagName('P')[1].innerHTML = 'Display every note you play on guitar (send by LiCAP)'
                break
            case 'select-zone':
                m[0].getElementsByTagName('P')[0].innerHTML = 'Instrument Zone'
                m[0].getElementsByTagName('P')[1].innerHTML = 'Each note in the same zone has the same setting above'
                break
            case 'select-dot':
                m[0].getElementsByTagName('P')[0].innerHTML = 'Single sampler'
                m[0].getElementsByTagName('P')[1].innerHTML = 'Drop any wav or mp3 file into a single fret, it will play your sample file while you play this fret'
                break
            case 'global-setting':
                m[0].getElementsByTagName('P')[0].innerHTML = 'Global Setting'
                m[0].getElementsByTagName('P')[1].innerHTML = 'Shift your Midi CC or adjust midi mode to MPE or traditional'
                break
            case 'show-bluetooth':
                m[0].getElementsByTagName('p')[0].innerHTML = 'Bluetooth'
                m[0].getElementsByTagName('P')[1].innerHTML = 'Check your device is connected while use everytime'
                break
            case 'show-battery':
                m[0].getElementsByTagName('p')[0].innerHTML = 'Battery'
                m[0].getElementsByTagName('P')[1].innerHTML = 'Monitoring your licap on the corner of LiCCON'
                break
        }
        for(let i=0;i<n.length;i++){
            n[i].classList.add('mobile-is-show')
        }
    } else {
        m[0].classList.remove('mobile-is-show')
        for(let i=0;i<n.length;i++){
            n[i].classList.remove('mobile-is-show')
        }
    }
}

function zoomOut(){
    let result = document.getElementById('mobile-zoom')
    let dot = document.getElementsByClassName('mobile-dot')
    let is_show = document.querySelectorAll('.mobile-is-show')
    console.log(is_show)
    for(let i=0;i<dot.length;i++) {
            dot[i].style.display = 'block';
    }
    for(let j=0;j<is_show.length;j++){
        is_show[j].classList.remove('mobile-is-show')
    }
    result.style.backgroundSize =  "100%"
    result.style.backgroundPosition = "0 0";
    zoom = false
}