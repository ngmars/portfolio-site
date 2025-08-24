import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'

const canvas = document.getElementById('canvas');


// 1. scene 

const scene = new THREE.Scene();
scene.background = new THREE.Color("#F0F0F0");

// 2. Camera 
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

//3. Object 
const geometry = new THREE.IcosahedronGeometry();
const material = new THREE.MeshLambertMaterial({
  color: '#468585',
  emissive: '#468585'
});
const icosahedron = new THREE.Mesh(geometry, material)

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshStandardMaterial({
  color: '#787878',
  emissive: '#787878'
});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;

scene.add(icosahedron);
scene.add(box);

// 4. Add lighting
const lighting = new THREE.SpotLight(0x9CDBA6, 100)
lighting.position.set(1,1,1);
scene.add(lighting)

// 5. Set up the renderer 
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
//renderer.render(scene,camera)

//orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

// add animation 
function animate() {
    requestAnimationFrame(animate);

    icosahedron.rotation.x += 0.01
    icosahedron.rotation.y +=0.01;

    box.rotation.y +=0.005;
    controls.update()
    renderer.render(scene, camera)
}

animate();

