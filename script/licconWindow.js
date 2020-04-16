var objA = false
var objB = false
var objC = false
var objD = false
var objE = false
var objF = false

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
        // m[0].innerHTML = `${123}`
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