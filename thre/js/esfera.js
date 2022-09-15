const scene = new THREE.Scene();
scene.background = new THREE.Color(0x127462)
const textura = new THREE.TextureLoader()
const matcap = textura.load("../images/Cafe.jpg")

var loader = new THREE.TextureLoader();
loader.load('../images/cultivo-Dia-de-la-Madre-Tierra.jpg', function(texture){
    scene.background = texture;
})

const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1 , 1000);

const renderizar = new THREE.WebGLRenderer();
renderizar.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizar.domElement)

const geometry = new THREE.CapsuleGeometry(1, 1, 4, 7);
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
/* material.flatShading = true; */
const capsula = new THREE.Mesh(geometry,material);
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x0000000 } ) );
scene.add( line );
scene.add(capsula);


camara.position.z = 10
camara.position.y = 0
camara.position.x = 0

function animate() {
    requestAnimationFrame(animate)
    capsula.rotation.z += 0.04
    capsula.rotation.y += 0.04
    /* capsula.rotation.x += 0.04 */
    /* line.rotation.x += 0.04 */
    line.rotation.y += 0.04
    line.rotation.z += 0.04
    renderizar.render(scene, camara)
}

animate();