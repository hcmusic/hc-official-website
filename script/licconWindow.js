function showThis(obj){
    console.log(document.getElementsByClassName(obj))
    let m = document.getElementsByClassName(obj)
    for(i=0;i<m.length;i++){
        if(m[i].tagName !== "svg") {
            m[i].classList.add("is-show")
        }
    }
    // document.getElementsByClassName(obj)[0].classList.add("show-block")
    // document.getElementsByClassName(obj)[2].classList.add("show-block")
}

function closeThis(obj){
    let m = document.getElementsByClassName(obj)
    for(i=0;i<m.length;i++){
        if(m[i].tagName !== "svg") {
            m[i].classList.remove("is-show")
        }
    }
}