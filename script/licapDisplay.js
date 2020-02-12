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

var renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
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
    capMat = new THREE.MeshPhongMaterial({color: 0x555555, specular: 0x111111 , shininess: 50});
    obj.applyMatrix( new THREE.Matrix4().makeTranslation(-235,0,0));
    obj.applyMatrix(new THREE.Matrix4().makeRotationZ(1.57))
    cap = new THREE.Mesh(obj, capMat);
    cap.position.z = -200;
    if(window.innerWidth <= 670) cap.position.z = -200;
    scene.add( cap );
    isLoaded = true;
    cap.rotation.y = -0.5;
    cap.rotation.x = 0.1;
    requestAnimationFrame( animate );
}, undefined, function ( error ) {
    console.error( error );
} );

var mdx, mdy, crx, cry;
var isMouseDown = false;
displayElement.addEventListener('mousedown', function(ev) {
    document.getElementById("rotate-3d").style.display = "none";
    isMouseDown = true;
    mdx = ev.clientX;
    mdy = ev.clientY;
    crx = cap.rotation.x;
    cry = cap.rotation.y;
});
displayElement.addEventListener('mouseup', function() {
    isMouseDown = false;
})
displayElement.addEventListener('mousemove', function(ev) {
    if(isMouseDown && isLoaded) {
        cap.rotation.y = cry + (ev.clientX - mdx)*0.015;
        cap.rotation.x = crx + (ev.clientY - mdy)*0.015;
        requestAnimationFrame( animate );
    }
});
displayElement.addEventListener('touchmove', function(ev) {
    if(ev.touches.length == 2){
        document.getElementById("rotate-3d").style.display = "none";
        document.getElementById("touch-tip").style.visibility = "hidden";
        ev.preventDefault();
        if(!isMouseDown){
            isMouseDown = true;
            mdx = ev.touches[0].clientX;
            mdy = ev.touches[0].clientY;
            crx = cap.rotation.x;
            cry = cap.rotation.y;
        }else{
            if(isLoaded) {
                cap.rotation.y = cry + (ev.touches[0].clientX - mdx)*0.015;
                cap.rotation.x = crx + (ev.touches[0].clientY - mdy)*0.015;
                requestAnimationFrame( animate );
            }
        }
        
    }
});
displayElement.addEventListener('touchend', function() {
    isMouseDown = false;
})