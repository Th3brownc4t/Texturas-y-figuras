const scene = new THREE.Scene();
scene.background = new THREE.Color(0x74123c)
const textura = new THREE.TextureLoader()
const matcap = textura.load("../images/summer-background-of-sea-water.jpg")


var loader = new THREE.TextureLoader();
loader.load('../Images/descarga.jpg', function(texture){
	scene.background = texture;
})

const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusGeometry(5, 2, 8, 100);
const geometry2 = new THREE.TorusGeometry(5, 2, 8, 100);
const geometry3 = new THREE.TorusGeometry(5, 2, 8, 100);
const geometry4 = new THREE.TorusGeometry(5, 2, 8, 100);
const material = new THREE.MeshMatcapMaterial();
const material2 = new THREE.MeshNormalMaterial();
const material3 = new THREE.MeshNormalMaterial();
const material4 = new THREE.MeshNormalMaterial();

material.matcap = matcap;
/* material.flatShading = true; */
const cube = new THREE.Mesh( geometry, material);
const cube2 = new THREE.Mesh( geometry2, material2);
const cube3 = new THREE.Mesh( geometry3, material3);
const cube4 = new THREE.Mesh( geometry4, material4);
/* const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x0000000 } ) );
scene.add( line ); */
scene.add( cube, cube2, cube3, cube4 );

/* const PointLockControls = new THREE.PointerLockControls(camara, renderer.domElement);
document.getElementById("btnplay").onclick = () => {
	PointLockControls.lock();
} */

camara.position.z = 50;
cube2.position.x = 20;
cube3.position.x = -20;
cube4.position.y = 15	;

var objects = [cube, cube2, cube3, cube4]

var dcontrol = new THREE.DragControls( objects, camara, renderer.domElement);
dcontrol.deactivate();
dcontrol.activate();

const flycontrols = new THREE.FlyControls(camara, renderer.domElement);
flycontrols.movementSpeed = 10;
flycontrols.rollSpeed = 0.01;
flycontrols.autoForward = false;
flycontrols.dragToLock = false;

dcontrol.addEventListener("hoveron",function(event){
	event.object.material.wireframe = true;
	event.object.scale.y *= 2;
});
dcontrol.addEventListener("hoveroff",function(event){
	event.object.material.wireframe = false;
	event.object.scale.y /= 2;
});

/* var control = new THREE.OrbitControls( camara, renderer.domElement );
control.minDistance = 10
control.maxDistance = 20 */

function animate() {
	requestAnimationFrame(animate);
	cube.rotation.y += 0.04
	cube.rotation.z += 0.04
	cube.rotation.x += 0.04
	cube2.rotation.y += 0.06
	cube2.rotation.z += 0.06
	cube2.rotation.x += 0.06
	cube3.rotation.x += 0.08
	cube3.rotation.y += 0.08
	cube3.rotation.z += 0.08
	flycontrols.update(0.1);
	/* line.rotation.x += 0.04
    line.rotation.y += 0.04
    line.rotation.z += 0.04 */
	renderer.render(scene, camara);
}

animate();