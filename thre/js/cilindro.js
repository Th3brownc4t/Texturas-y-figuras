const scene = new THREE.Scene();
scene.background = new THREE.Color(0x127462)
const textura = new THREE.TextureLoader()
const matcap = textura.load("../images/brown-wooden-flooring.jpg")

const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1 , 1000);

const renderizar = new THREE.WebGLRenderer();
renderizar.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizar.domElement);

const geometry = new THREE.CylinderGeometry(1, 4, 5, 8);
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;
const cilindro = new THREE.Mesh(geometry,material);
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x0000000 } ) );
scene.add( line );
scene.add(cilindro);
scene.fog = new THREE.Fog(0xffffff ,1, 15);


camara.position.z = 10
camara.position.y = 0
camara.position.x = 0

function animate() {
    requestAnimationFrame(animate)
    cilindro.rotation.y += 0.04
    cilindro.rotation.x += 0.04
    line.rotation.x += 0.04
    line.rotation.y += 0.04
    renderizar.render(scene, camara)
}

animate();