const scene = new THREE.Scene();
scene.background = new THREE.Color(0x74123c)
const textura = new THREE.TextureLoader()
const matcap = textura.load("../images/background-made-from-bricks.jpg")

var loader = new THREE.TextureLoader();
loader.load('../images/unnamed.jpg', function(texture){
	scene.background = texture;
})

const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;
const cube = new THREE.Mesh( geometry, material)
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x0000000 } ) );
scene.add( line );
scene.add( cube )

camara.position.z = 5;
camara.position.y = 0;
camara.position.x = 0;

 
function animate() {
	requestAnimationFrame(animate);
	cube.rotation.y += 0.04
	cube.rotation.z += 0.04
	cube.rotation.x += 0.04
	line.rotation.x += 0.04
    line.rotation.y += 0.04
    line.rotation.z += 0.04
	renderer.render(scene, camara);
}

animate();
