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
// function closeThis(obj){
//     let m = document.getElementsByClassName(obj)
//     for(i=0;i<m.length;i++){
//         if(m[i].tagName !== "svg") {
//             m[i].classList.remove("is-show")
//         }
//     }
// }