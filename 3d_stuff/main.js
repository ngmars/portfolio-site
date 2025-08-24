import * as THREE from 'three';

console.log("HELLO")
// 1. create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// 2. add the camera
const camera = new THREE.PerspectiveCamera(75,(window.innerWidth/window.innerHeight), 0.1, 1000);
camera.position.z = 5

// 3. Create and add a cube object 
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({
    color: '#468585',
    emissive: '#468585'
})

const cube = new THREE.Mesh(geometry,material)
scene.add(cube)

// 4. Add lighting
const lighting = new THREE.DirectionalLight(0x9CDBA6, 10)
lighting.position.set(1,1,1);
scene.add(lighting)

// 5. Set up the renderer 
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

// 6. Animate the scene
renderer.render(scene,camera);

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01
    cube.rotation.y +=0.01;
    renderer.render(scene, camera)
}

animate();




//
// import React from 'react';

// const App = () => {
//   return ( 
//   <main className='max-w-7xl mx-auto'>
//     <h1 className='text-2xl text-white underline'>Hello Nitish</h1>
//   </main> 
//   );
// }
 
// export default App;