const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000)

var loader = new THREE.TextureLoader();
loader.load('../Images/descarga.jpg', function(texture){
    scene.background = texture;
})

const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const cubeTextureLoader = new THREE.CubeTextureLoader();
const evm = cubeTextureLoader.load([
    "../Images/fondo-metálico.jpg",
    "../Images/fondo-metálico-copia.jpg",
    "../Images/fondo-metálico-copia(2).jpg",
    "../Images/fondo-metálico-copia(3).jpg",
]);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement);


const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial();
material.roughness = 0.4;
material.metalness = 0.5;
material.envMap = evm;
const cube = new THREE.Mesh( geometry, material);
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x0000000 } ) );
const light = new THREE.DirectionalLight(0x404040, 10 )
scene.add( light );
scene.add( line );
scene.add( cube );


camara.position.z = 30;
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