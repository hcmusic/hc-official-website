var displayElement = document.getElementById("licap-model");
var loader = new THREE.STLLoader();
var scene = new THREE.Scene();
var width = window.innerWidth * 0.8 - 310;
var height = 500;
if(window.innerWidth <= 670) {
    width = window.innerWidth*0.9;
    height = width;
}
var camera = new THREE.PerspectiveCamera( 40, width/height , 0.1, 1000 );
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( width, height);
displayElement.appendChild( renderer.domElement );

var light = new THREE.PointLight(0xffffff, 1);
var light2 = new THREE.AmbientLight(0xffffff, 0.3);
var light3 = new THREE.PointLight(0xffffff, 1);
light.position.set(60,30,5);
light3.position.set(-60,30,5);
scene.add(light);
scene.add(light3);
scene.add(light2);

var cap, capMat;
var isLoaded = false;
var animate = function() {
    renderer.render( scene, camera );
}
loader.load( './tdmodel/Cap.stl', function(obj) {
    capMat = new THREE.MeshPhongMaterial({color: 0x660000, specular: 0x111111 , shininess: 50});
    obj.applyMatrix( new THREE.Matrix4().makeTranslation(-40, -13, -5));
    cap = new THREE.Mesh(obj, capMat);
    cap.position.z = -150;
    if(window.innerWidth <= 670) cap.position.z = -200;
    scene.add( cap );
    isLoaded = true;
    cap.rotation.y = -0.5;
    cap.rotation.x = 0.3;
    requestAnimationFrame( animate );
}, undefined, function ( error ) {
    console.error( error );
} );

var mdx, mdy, crx, cry;
var isMouseDown = false;
displayElement.onmousedown = function(ev) {
    isMouseDown = true;
    mdx = ev.clientX;
    mdy = ev.clientY;
    crx = cap.rotation.x;
    cry = cap.rotation.y;
}
displayElement.onmouseup = function() {
    isMouseDown = false;
}
displayElement.onmousemove = function(ev) {
    if(isMouseDown && isLoaded) {
        cap.rotation.y = cry + (ev.clientX - mdx)*0.015;
        cap.rotation.x = crx + (ev.clientY - mdy)*0.015;
        requestAnimationFrame( animate );
    }
}

var rotRight = document.getElementById("rotate-right");
var rotLeft = document.getElementById("rotate-left");
var rotSpeed = 0;
var rotAnimeHandler = 0;
function rotateAnime(){
    cap.rotation.y += rotSpeed;
    renderer.render( scene, camera );
    rotAnimeHandler = requestAnimationFrame(rotateAnime);
}
rotRight.onclick = function(){
    cancelAnimationFrame(rotAnimeHandler)
    if(rotSpeed >= 0){
        rotSpeed = -0.01;
        rotAnimeHandler = requestAnimationFrame(rotateAnime);
    }else{
        rotSpeed = 0;
    }
}
rotLeft.onclick = function(){
    cancelAnimationFrame(rotAnimeHandler)
    if(rotSpeed <= 0){
        rotSpeed = 0.01;
        rotAnimeHandler = requestAnimationFrame(rotateAnime);
    }else{
        rotSpeed = 0;
    }
}
